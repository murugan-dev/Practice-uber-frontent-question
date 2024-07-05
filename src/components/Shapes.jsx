import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import classnames from "classnames";
import "../css/Shapes.css";

const Shapes = ({ box }) => {
  const [selected, setSelected] = useState(new Set());
  const [unloading, setUnloading] = useState(false);
  const timerRef = useRef(null)

  const flatArr = useMemo(() => box.flat(Infinity), [box]);

  const countOfVisibleBox = useMemo(() => {
    return flatArr.reduce((acc, curr) => {
      if (curr === 1) {
        acc += 1;
      }
      return acc;
    }, 0);
  }, [flatArr]);

  const unload = useCallback(() => {
    setUnloading(true);
    const keys = Array.from(selected.keys());
    if (keys.length) {
      const removeKey = () => {
        const eliminate = keys.shift();
        setSelected((prev) => {
          const updateKeys = new Set(prev);
          updateKeys.delete(eliminate);
          return updateKeys;
        });
        if (keys.length) {
          timerRef.current = setTimeout(removeKey, 500);
        } else {
          setUnloading(false);
          clearTimeout(timerRef)
        }
      };
      timerRef.current = setTimeout(removeKey, 100);
    } else {
      setUnloading(false);
      clearTimeout(timerRef)
    }
  }, [selected]);

  useEffect(() => {
    if (selected.size >= countOfVisibleBox) {
      unload();
    }
  }, [selected, countOfVisibleBox, unload]);

  const handleEvent = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    console.log(index, status);

    if (index === null || status === "box-hidden" || unloading) {
      return;
    }

    setSelected((prev) => new Set(prev.add(index)));
  };

  return (
    <div className="shape-con" onClick={handleEvent}>
      {flatArr.map((item, idx) => {
        const status = item === 1 ? "box-visible" : "box-hidden";
        const select = selected.has(idx.toString());
        return (
          <div
            key={idx}
            className={classnames(status, select && "box-colored")}
            data-index={idx}
            data-status={status}
          ></div>
        );
      })}
    </div>
  );
};

export default Shapes;

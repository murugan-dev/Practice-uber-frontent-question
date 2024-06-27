// Use this data to create the shape
import Shapes from "./componets/Shapes"
const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

export default function App() {
  return <main>
    <Shapes box={BOX_DATA}/>
  </main>;
}

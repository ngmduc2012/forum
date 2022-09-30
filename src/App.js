import logo from './logo.svg';
import './App.css';
import {SpreadsheetComponent} from "@syncfusion/ej2-react-spreadsheet";

function App() {
  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", }}>
        <div style={{width: "500px"}}>Column 1</div>
        <div style={{width: "500px"}}><SpreadsheetComponent/></div>
        </div>
    </div>
  );
}

export default App;

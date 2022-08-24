
import { useState } from 'react';
import './App.css';
import ColorfulComponent from './components/ColorfulComponent';
// import { useInputHook } from './hooks/useInputHook';
function App() {
  const [colorsList, setColorsList] = useState([])
  // const inputColor = useInputHook();
  const [inputColor, setInputColor] = useState("");
  function handleChange(event) {
    setInputColor(event.target.value);
  }

  function addColor() {
    //  ... destructs colorList 
    setColorsList([...colorsList, inputColor]);
  }

  function handleRemove(color) {
    setColorsList(colorsList.filter(c => color !== c))
  }
  return (
    <div className="App">
      <br />
      <label >Enter Color:</label> &nbsp;
      <input type="text" name="color" value={inputColor} onChange={handleChange} /> 
     {/* <input {...inputColor} />&nbsp; */}
      <button onClick={addColor}>Add Color</button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* map take 2 parameter one for value and second paramter for index */}
        {colorsList.map((color, index) => (<ColorfulComponent color={color} handleRemove={() => handleRemove(color)} />))}
      </div>
    </div>
  );
}

export default App;

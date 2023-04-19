import React from 'react'
import { useState } from 'react';
import deleteIcon from '../assets/deleteIcon.png';
import AddButton from './AddButton';

function Component(props) {
  const { value1 } = props;
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
    console.log("delete")
  };

  const getInitialState = () => {
    const value = "String";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  document.getElementById("input")?.addEventListener("change", GetData);

  function GetData() {
    var data = document.querySelector('input').value;
    console.log("data-->", data);
  };
  return (
    <>{visible &&
      <div style={{ borderWidth: 2, width: 500, height: 50, background: 'grey' }}>
        <ul>
          <span>{`${value1+1 }    `}  </span>
          <div className='inputField' style={{ flex: 'row', display: 'inline-block' }}>
          <div style={{ flex: 'row', display: 'inline-block', backgroundColor:'white', width: 100, padding:6 }}>
            <h5 id="input" contentEditable="true">  Field Name</h5></div>
            {/* <input id="input" onChange={GetData} style={{ backgroundColor: 'white' }} placeholder='Field name' /> */}
          </div>
          <div className='Dropdown' style={{ flex: 'row', display: 'inline-block' }}>
            <select value={value} onChange={handleChange}>
              <option value="Object">Object</option>
              <option value="String">String</option>
              <option value="Boolean">Boolean</option>
              <option value="Number">Number</option>
            </select>
         
          </div>
          <div style={{ flex: 'row', display: 'inline-block' }}>
            <div><h5 style={{ flex: 'row', display: 'inline-block', margin: 10 }}>Required  </h5><div style={{ flex: 'row', display: 'inline-block' }}><label className="switch"><input type="checkbox" />
              <span className="slider round"></span>
            </label></div>
            </div>
          </div>

          <div style={{ flex: 'row', display: 'inline-block' }}>
            <button >
              <img src={deleteIcon} style={{ width: 15, height: 12 }} onClick={removeElement} />
            </button>
          </div>
          {value == "Object" && <AddButton />}
        </ul>
      </div>}
    </>
  );
}

export default Component
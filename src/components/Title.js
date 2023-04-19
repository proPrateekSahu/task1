import React from 'react'
import { useState} from 'react';
import Component from './Component';

function Title() {
  const [compArr, setCompArray] = useState([]);
  const onPressButton = () => {
    let arr = compArr;
    arr.push('test')
    setCompArray([...arr]);
  }
  return (
    <div style={{ margin: 30, paddingTop: 10, backgroundColor: 'ButtonShadow', height: 30, width: 500 }} className='header'>
      <span style={{ margin: 40 }}>Field name and type</span>
      <button style={{ float: 'right', marginRight: 40, marginBottom: 3 }}
        onClick={() => onPressButton()}>{"+"}</button>
      {!!compArr.length &&
        compArr.map((value, index) => (<Component value1={index} />)) 
      }
    </div>
  );
}

export default Title
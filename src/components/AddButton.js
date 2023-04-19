import React from 'react'
import Component from './Component';
import { useState } from 'react';

function AddButton() {
    const [compArr, setCompArray] = useState([]);
  const onPressButton= () => {
    let arr = compArr;
    arr.push('test')
    setCompArray([...arr]);
  }
  return (
    <>
      <button style={{ float: 'right', marginRight: 40, marginBottom: 3, marginTop:25 }}
        onClick={() => onPressButton()}>{"+"}</button>
     {!!compArr.length &&
        compArr.map((value, index) => (<Component value1={index} />)) 
      }
    </>
  );
}

export default AddButton
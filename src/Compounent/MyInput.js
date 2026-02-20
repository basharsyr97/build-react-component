import { useState } from "react";

export default function MyInput() {
    const [inputValue , setInputValue] =  useState(""); ;
 
    const onChangeFun = (e) => {
        setInputValue(e.target.value) ;
        console.log(inputValue);
    }
    const onClickFun = (e) => {
        console.log("input clicked");
    }
    
  return (
    <>
      <label>my input</label>
      <input value={inputValue} onChange={onChangeFun} onClick={onClickFun} />
      <p>{inputValue}</p>
    </>
  );
}

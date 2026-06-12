
import { useState } from "react";
import  Btnchild  from "../component/Btnchild";


const My = ({count, setCount}) => {
//   const [num, setNum] = useState(0);
  const [number,setNumber] = useState(0);
  

  

  return (
    <div className="flex flex-col gap-4 m-4 p-4 ">
      {/*
      <span>NumParent : {number}</span>
      <span>Count : {count}</span>
      <span>Number : {number}</span>

      <Btnchild count={count} setCount={setCount} number={number} setNumber={setNumber} />

      <Btn num={num} setNum={setNum} />
      <Btn num={num} setNum={setNum} />
      <Btn num={num} setNum={setNum} />
      <Btn number={number} setNumber={setNumber} />

      <button
        className="bg-orange-400 text-white"
        onClick={() => setCount(count + 1)}
      >
        Add product
      </button>
      */}
    </div>
  );
};
export  default  My

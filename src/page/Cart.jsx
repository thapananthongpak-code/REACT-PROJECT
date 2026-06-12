import { useState } from 'react';
import Card from "../component/Card";
import Btnchild from '../component/Btnchild';

const Cart = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [add, setAdd] = useState(5);

  const [num, setNum] = useState(5);
  // const [btn, setBtn] = useState(2);

  

  // const [num, setNum] = useState(0);
  // const [text, setText] = useState("Hello");

  const [check, setCheck] = useState(true);
  
  
 


    return (
      <div>
        <Card
          getCount={count}
          setCount={setCount}
          // getText={text}
          // setText={setText}
          getCheck = {check}
          setCheck = {setCheck}
          name={"Nike"}
          price={2000}
          img={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7hWH1qG8R-IcN5QOb54uj4CScI-90t5L1R4p8cc3k0iCi6bLeYORa6dZVTDK9IvmsLYRwe8E&usqp=CAc"}
          alt={"Adidas"}
          width={50}
          height={50}
        />
         {/* <Btnchild  count = {5} setCount = {setCount}  number = {5}  setNumber ={setNumber}/> */}
         <Btnchild  count = {count} setCount = {setCount}  number = {number}  setNumber = {setNumber} btn = {2} bgBtn={"bg-blue-500"}/>
            
         <Btnchild  count = {add} setCount = {setAdd}  number = {num}  setNumber = {setNum}   btn = {6} />
         
        



      </div>
      
    );
  };
  
  export default Cart;
  // rafc 
  // <Btnchild  text = {text} setText = {setText}   name = {name} setName = {setName} />
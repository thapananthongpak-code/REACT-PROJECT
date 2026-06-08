import { useState } from 'react';
import Card from "../component/Card";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("hello");
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
      </div>
      
    );
  };

export default Cart;
// rafc 
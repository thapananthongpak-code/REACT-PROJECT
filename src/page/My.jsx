
import Btn  from "../component/Btn";
import { useState } from "react";

const My = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <span>NumParent : {num}</span>
      <Btn num={num} setNum={setNum} />
    </div>
  );
};
export  default  My

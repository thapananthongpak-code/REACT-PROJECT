import React, { useState, useEffect } from "react";


const Btnchild = ({ count, setCount, number, setNumber, btn, bgBtn}) => {

    // const [open, setOpen] = useState(false);
    const [sum, setSum] = useState(0);
    // const [add, setAdd] = useState(0);
    // // const [name, setName] = useState(0);
    // useEffect(() => {
        
    

    // }, [add]);
  
    // }

    // const handOpen = () => {
    //     setOpen(!open ); // Not
    // };   
    
  return (
    <div className="flex flex-col border border-black-500 m-4 p-8">
      <div className="flex gap-4">
        <span>count : {count}</span>
        <span>number : {number}</span>
        <span>sum : {sum}</span>

        {/* <span>num : {numum}</span>
        <span>text : {text}</span> */}



        {/* <button
        //   className={bgBtn ? `${bgBtn} text-white` : "bg-amber-300 text-white"}
          onClick={() => setCount(count + btn)}
        >
          count
        </button>
        
        <button
          className="bg-pink-600 text-white "
          onClick={() => setNumber(number + btn)}
        >
          Number
        </button>
        <button
          className="bg-slate-400 text-white "
          onClick={() => setSum(count + number)}
        >
          Sum
        </button> */}

        </div>
    </div> 

//          <button className="bg-red-400 text-blue-600 text-xs m-2 p-2" onClick = {() => setOpen(!open)} > go </button>
         
            
//          {open ? (
//           <div>
//             <div>
//               <p className="flat-black-button-content">
//                 hello
//               </p>
//             </div>
//           </div>
//         ) : <span> sirisoft2026 </span>}
//       </div>
//     </div> 
  );
};


export default Btnchild;

         

       
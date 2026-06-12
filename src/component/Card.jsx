// import { useEffect } from "react";

const Card = ({getCount, setCount, name, price, img, alt, width, height, check, setCheck}) => {
    return(
    <div className="border border-gray-300 rounded-md p-5 flex flex-col gap-3 bg-white ">
        <img
        img={img}
        alt={alt}
        width={width}
        height={height}
        />
        <h3 className="text-black"> จำนวนสินค้า:{getCount}</h3>
        <p className="text-gray-500 text-xs">แบรนด์:{name}</p>
        <p className="text-gray-500 text-xs">ราคา:{price} บาท</p>
        <div className="flex gap-2 ">
        <button
            onClick={() => setCount(getCount + 1)}
            className="rounded-md text-black cursor-pointer " >
            Add to Cart
        </button>

       <button 
            onClick={() => setCount(getCount - 1)}
            className="rounded-md text-blue cursor-pointer" >
            Remove from Cart
       </button>

          <label>

        <input
          type="checkbox"
          checked={check}
        //   onChange={(item) => setCheck(item.target.checked)}
          onChange={(e) => console.log(e.target.checked)}
        
        
        />
         check
        </label>




        </div>
    </div>
    
  )
};

export default Card;



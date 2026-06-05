const Functional = ({price, name, id, emoji, classCom}) => (
	<div flex flex-col flex-1>
     <span className="text-gray-500 text-sm ">ชื่อ:{name} ราคา:{price}  ไอดี:{id} {emoji} </span>
     <span className={`text-gray-500 ${classCom}`}>ราคา: {price} บาท</span>
   </div>
);

export default Functional;
    

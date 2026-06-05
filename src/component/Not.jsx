const Not = ({name, img ,inbox, alt, width, height, price}) => (
  <div className="flex flex-col gap-3 p-4 ">
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-xl">
        <div className="rounded-full bg-gray-200 overflow-hidden">
          <img
            src={img}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm  text-gray-800">{price} ชื่อสินค้า {name}</p>
          <p className="text-xs text-gray-500">{inbox}</p>
        </div>
      </div>
    </div>
);
export default Not;
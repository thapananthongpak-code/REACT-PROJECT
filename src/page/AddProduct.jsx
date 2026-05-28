const AddProduct = () => {
  return (
    <div className="bg-white flex flex-col">
      <div className="flex-1 px-4 py-4">
        <div className=" border border-gray-300 rounded-md w-full flex items-center justify-center ">
          <img
            src="https://www.jdsports.co.th/cdn/shop/files/jd_ANZ0139294_c.jpg?v=1778070173&width=1007"
            alt="img1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="border border-gray-300 rounded-md flex items-center justify-center ">
            <img
              src="https://www.jdsports.co.th/cdn/shop/files/jd_ANZ0139294_d.jpg?v=1778070176&width=1007"
              alt="img2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border border-gray-300 rounded-md flex items-center justify-center ">
            <img
              src="https://www.jdsports.co.th/cdn/shop/files/jd_ANZ0139294_e.jpg?v=1778070178&width=1007"
              alt="img3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <input
          type="number"
          placeholder="Size"
          className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium w-28"
        />
        <input
          type="number"
          placeholder="Price"
          className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium w-28"
        />
      </div>

      <div className="px-4 py-4 mt-4">
        <button className="w-full py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

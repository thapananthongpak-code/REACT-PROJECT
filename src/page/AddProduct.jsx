

const AddProduct = () => (
  <div className="bg-white flex flex-col">
    <div className="flex-1 ">
      <div className=" border border-gray-300 rounded-md w-full flex items-center justify-center ">
        <img
          src="https://www.jdsports.co.th/cdn/shop/files/jd_ANZ0139294_c.jpg?v=1778070173&width=1007"
          alt="Img-Add"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>

      <div className="grid  grid-cols-2 gap-1 mt-2">
        <div className="border border-gray-300 rounded-md flex items-center justify-center ">
          <img
            src="https://www.jdsports.co.th/cdn/shop/files/jd_ANZ0139294_d.jpg?v=1778070176&width=1007"
            alt="Img-Add2"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <div className="border border-gray-300 rounded-md flex items-center justify-center ">
          <img
            src="https://www.jdsports.co.th/cdn/shop/files/jd_ANZ0139294_e.jpg?v=1778070178&width=1007"
            alt="Img-Add3"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div className="flex gap-3 mt-5 px-4 py-4">
      <select
        name="Size us"
        id="us"
        className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium w-28"
      >
        <option value="us">us</option>
        <option value="us 8">us 8</option>
        <option value="us 9">us 9</option>
        <option value="us 10">us 10</option>
        <option value="us 11">us 11</option>
        <option value="us 12">us 12</option>
      </select>

      <select
        name="Size uk"
        id="uk"
        className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium w-28"
      >
        <option value="uk">uk</option>
        <option value="uk 8">uk 8</option>
        <option value="uk 9">uk 9</option>
        <option value="uk 10">uk 10</option>
        <option value="uk 11">uk 11</option>
        <option value="uk 12">uk 12</option>
      </select>

      <fieldset>
        <legend className="font-medium text-gray-700">
          Grade
        </legend>

        <div className="flex flex-col gap-3">
          <label className="inline-flex items-center gap-3  checked:bg-blue-600">
            <input
              type="checkbox"
              id="Option1"
              className="size-5 rounded border-gray-300 "
            />

            <span className="font-medium text-gray-700">
              Brand new
            </span>
          </label>

          <label className="inline-flex items-center gap-3 accent-pink-500">
            <input
              type="checkbox"
              id="Option2"
              className="size-5 rounded border-gray-300"
            />

            <span className="font-medium text-gray-700">
              Second-hand 
            </span>
          </label>

          <label className="inline-flex items-center gap-3  checked:bg-gray-600">
            <input
              type="checkbox"
              id="Option3"
              className="size-5 rounded border-gray-300"
            />

            <span className="font-medium text-gray-700">
             Unboxed
            </span>
          </label>
        </div>
      </fieldset>
      <select
        name="Price grade1"
        id="grade1"
        className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium w-28"
      >
        <option value="price">price</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="3000">3000</option>
        <option value="4000">4000</option>
        <option value="5000">5000</option>
      </select>
    </div>

    <div className="px-4 py-4 mt-5">
      <button className="w-fit py-3 rounded-md px-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer ">
        Confirm
      </button>
    </div>
  </div>
);
export default AddProduct;

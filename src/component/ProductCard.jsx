const ProductCard = ({ name, price, image, brand, onAddToCart }) => (
  <div className="border border-gray-300 rounded-md p-5 flex flex-col gap-3 bg-white hover:scale-105 transition">
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-cover rounded-md"
    />
    <h3 className="text-base text-[#1a1a2e]">{name}</h3>
    <p className="text-gray-500">แบรนด์: {brand}</p>
    <p className="text-gray-500">ราคา: {price} บาท</p>
    <div className="flex gap-2 ">
      <button className="cursor-pointer rounded-md border border-gray-800 bg-white flex-1 hover:scale-105 transition">
        More Info
      </button>
      <button
        className="cursor-pointer rounded-md border-none bg-gray-800 text-white flex-1 hover:scale-105 transition"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;

const Banner = ({src, alt}) => (
  <div className="bg-gray-200 p-6 flex flex-col items-center gap-3">
     <img
        src= {src}
        alt= {alt}
        className="w-25 h-25"
      />
    <h1 className="text-2xl text-[#1a1a2e]">Welcome to Our Store!</h1>
    <p className="text-lg text-[#1a1a2e]">Find the best products at unbeatable prices.</p>
  </div>
);

export default Banner;
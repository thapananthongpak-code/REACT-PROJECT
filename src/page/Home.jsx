import Banner from '../component/Banner';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import Functional from '../component/Functional';

const products = [
  {
    name: 'Nike Air Force 1',
    brand: 'Nike',
    price: 3500,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTy4ukPgyW4VsfTloQQYFxLzb97wuEN2_45aCS2BwMYvefL4qMMsi8e7rC5ZcpqWL3mZJbXaqfM8W_hcHSJEAvQcUc0LhOLaz8fNSY8ERth-nB1&usqp=CAc'
  },
  {
    name: 'Adidas Ultraboost',
    brand: 'Adidas',
    price: 4200,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuQK_8C3K7A86KMwjBrscfw4yGcnfpwHaW-_r_KPk8hHs2roaMPJVuRWmC-x0hkez2Zs4_ItFA&usqp=CAc'
  },
  {
    name: 'New Balance 574',
    brand: 'New Balance',
    price: 3200,
    image: 'https://www.jdsports.co.th/cdn/shop/files/jd_U574LGGD_a.jpg?v=1747103108&width=4288'
  },
  {
    name: 'Vans Old Skool',
    brand: 'Vans',
    price: 2800,
    image: 'https://media.lotsthailand.com/media/catalog/product/cache/1385b635fbcd2b4a1bd7d222a65ada37/v/n/vn000d3hy28_alt1.jpg'
  },
  {
    name: 'Converse Chuck Taylor',
    brand: 'Converse',
    price: 2500,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8kwiyojI14ylaV0nwIaSG1DMpag3XqT76nncuvcApFM54iwUtvTGcqm595-IhZUtpDkeszH2dqA4wsFiKYDcdzrt2qIG6cH9W8d6I8AA&usqp=CAc'
  },
  {
    name: 'Jordan 1 Retro High',
    brand: 'Jordan',
    price: 6500,
    image: 'https://uptherestore.com/cdn/shop/files/nike-womens-air-jordan-1-retro-hi-og-varisty-red-black-white-metallic-red-1_1160x.jpg?v=1747614165'
  },
  {
    name: 'jordan 1 low',
    brand: 'Jordan',
    price: 4500,
    image: 'https://d2cva83hdk3bwc.cloudfront.net/jordan-1-low-iron-grey-1.jpg'
  },
  {
    name: 'Yeezy Boost 350',
    brand: 'Yeezy',
    price: 6500,
    image: 'https://d2cva83hdk3bwc.cloudfront.net/BY9612-adidas-yeezy-boost-350-v2-core-black-red-1.jpg'
  },
];


// const Not = [
//   {
//     img:'https://d2cva83hdk3bwc.cloudfront.net/BY9612-adidas-yeezy-boost-350-v2-core-black-red-1.jpg',
//     name:'Lorem ipsum dolor sit',
//     brand:'Lorem Ipsum',
//   },
// ];




const Home = ({ addToCart }) => {
  return (
    <div className="flex flex-col flex-1">
      <Banner  src={"https://media.gq.com/photos/60d21930430ae505071c3806/16:9/w_2560%2Cc_limit/SNEAKER_GUIDE_OPENER.jpg"} alt={"img"}/>
      <div className="p-8 flex-1">
        <h2 className="text-xl font-semibold text-[#1a1a2e] mb-5">สินค้าแนะนำ</h2>
        <div className="grid grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.name} name={p.name} brand={p.brand} price={p.price} image={p.image} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
      <Footer MyShop = {"2026 MyShop"} />
    </div>
  );
};




export default Home;

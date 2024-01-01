import logo from "../assets/logo 4.png";

const Footer = () => {
  return (
    <footer className="w-dvh flex justify-center">
      <div className="container grid grid-cols-6 grid-rows-7 text-white ">
        <div className="row-span-6 space-y-5">
          <h1 className="text-lg font-bold">Products</h1>
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
          <p>Product 4</p>
          <p>Product 5</p>
          <p>Product 6</p>
        </div>
        <div className="row-span-6 space-y-5">
          <h1 className="text-lg font-bold">Solutions</h1>
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
          <p>Product 4</p>
          <p>Product 5</p>
          <p>Product 6</p>
        </div>
        <div className="row-span-6 space-y-5">
          <h1 className="text-lg font-bold">Developers</h1>
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
          <p>Product 4</p>
          <p>Product 5</p>
          <p>Product 6</p>
        </div>
        <div className="row-span-6 space-y-5">
          <h1 className="text-lg font-bold">Businesses</h1>
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
          <p>Product 4</p>
          <p>Product 5</p>
          <p>Product 6</p>
        </div>
        <div className="row-span-6 space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <p>Support</p>
          <p>Sales</p>
          <p>Report Abuse</p>
          <p>System Status</p>
          <p>Share your ideas</p>
        </div>
        <div className="col-span-6 row-start-7 flex items-center gap-5 mt-5">
          <div className="w-40 flex">
            <img src={logo} className="object-cover"/>
          </div>
          <p>© 2024 Lead Urban, LLC. Sitemap.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

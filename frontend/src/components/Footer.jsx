import { assets } from "./../assets/assets";

const Footer = () => {
  return (
    <div
      className="bg-red-950 text-white mt-8 text-center py-4 flex flex-col pt-10"
      id="footer"
    >
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mx-20 ">
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-4">
            <img src={assets.logoo} alt="logo" className="w-48" />
            <p className="flex flex-col items-start text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-xl font-bold">COMPANY</h2>
          <ul className="flex flex-col items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-xl font-bold">Get In Touch</h2>
          <ul className="flex flex-col items-center">
            <li>Phone: +123456789</li>
            <li>Email: eatzon@gmail.com</li>
            <li>Address: 123, Main Street, New York</li>
          </ul>
        </div>
      </div>
      <hr className="bg-white mt-4" />
      <div className="flex justify-between mx-4">
        <p className="mt-4">© 2021 EatZon. All Rights Reserved</p>
        <div className="social-icons mt-4  flex justify-center gap-4 ">
          <img src={assets.facebook_icon} alt="facebook" className="" />
          <img src={assets.twitter_icon} alt="twitter" className="" />
          <img src={assets.linkedin_icon} alt="linkedin" className="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

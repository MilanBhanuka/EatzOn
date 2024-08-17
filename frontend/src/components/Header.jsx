import { assets } from "./../assets/assets";

const Header = () => {
  return (
    <div className="flex  my-32  justify-center items-start relative rounded-lg">
      <div className="relative flex h-96   z-10 p-6 justify-center items-center  text-center">
        <div className="text-white">
          <h2 className="text-white font-bold text-3xl md:text-5xl mb-5">
            Order Your Favourite Food Here!
          </h2>
          <p className="font-bold text-xs md:text-lg mb-5">
            Choose from a diverse menu featuring a variety of cuisines and
            dishes.
            <br />
            Our mission is to provide the best food experience to our customers.
          </p>
          <div className="text-center">
            <button className="bg-red-950  text-sm text-white px-5 py-2 rounded-full hover:bg-red-800">
              View Menu
            </button>
          </div>
        </div>
      </div>

      <img
        src={assets.header_img_2}
        className="absolute w-10/12 h-96 object-cover bg-repeat  rounded-lg"
      />
    </div>
  );
};

export default Header;

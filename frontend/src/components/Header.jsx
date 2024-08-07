import { assets } from "./../assets/assets";

const Header = () => {
  return (
    <div className="flex h-1/3 m-5 justify-center items-center relative rounded-lg">
  <div className="relative z-50 p-6 text-center">
    <h2 className="text-black font-bold text-4xl mb-5">
      Order Your Favourite Food Here!
    </h2>
    <p className="font-bold mb-5">
      Choose from a diverse menu featuring a variety of cuisines and dishes.
      Our mission is to provide the best food experience to our customers.
    </p>
    <div className="text-center">
      <button className="bg-red-950 text-sm text-white px-5 py-2 rounded-full hover:bg-red-800">
        View Menu
      </button>
    </div>
  </div>

  <img
    src={assets.header_img}
    className="absolute w-11/12 object-cover bg-repeat opacity-85 h-full rounded-lg"
  />
</div>

  );
};

export default Header;

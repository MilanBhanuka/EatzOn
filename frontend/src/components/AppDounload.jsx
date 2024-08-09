import { assets } from "./../assets/assets";


const AppDownload = () => {
  return (
    <div className="app-download mx-20 mt-10 flex flex-col justify-center items-center text-center" id="app-download">
      <p className="text-4xl">
        For Better Experience Download
        <br />
        <p className="text-5xl font-bold text-red-900"> EatzOn App</p>
       
      </p>
      <div className="flex flex-row gap-10 mt-6">
        <img className="cursor-pointer hover:scale-105 " src={assets.play_store} alt="play store" />
        <img className="cursor-pointer hover:scale-105 " src={assets.app_store} alt="app store" />
      </div>
    </div>
  );
};

export default AppDownload;

import { assets } from "../assets/assets"

const Navbar = () => {
  return (
    <div className="flex bg-red-900 justify-end  items-center h-12 ">
        
        <img className="profile_image h-10 mx-4" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar

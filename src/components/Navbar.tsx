import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import  minecraftIcon from '../assets/4737386_minecraft_squircle_icon.png'

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='navbar bg-base-100 justify-between items-center'>
      <div className='flex items-center'>
        <img
          src={minecraftIcon}
          alt='CraftSnap Logo'
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <a className='font-bold normal-case text-xl'>
          CraftSnap<span></span>
        </a>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Navbar

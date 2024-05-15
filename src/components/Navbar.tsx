import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"

const Navbar = () => {
   const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error.message)
    }
   }

  return (
    <div className='navbar bg-base-100 justify-between'>
      <a className='font-bold normal-case underline text-xl'>
        Minecraft Captures<span>⛏️💎</span>
      </a>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Navbar

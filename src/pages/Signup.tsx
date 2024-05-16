import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import minecraftIcon from '../assets/4737386_minecraft_squircle_icon.png'


const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/') // Navigates to the home page after successful signup
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <div className='hero min-h-screen bg-base-200'>
          <div className='hero-content flex-col'>
            <div className='text-center flex items-center justify-center'>
              <img
                src={minecraftIcon} // Use the imported icon
                alt='CraftSnap Logo'
                style={{ width: '60px', height: '60px', marginRight: '10px' }}
              />
              <h1 className='text-5xl font-bold'> CraftSnap</h1>
            </div>
            <p className='py-6 text-center' style={{ maxWidth: '40rem' }}>
              Capture your craft and share your world! Join CraftSnap today
              where every block tells a story and every screenshot sparks a
              connection. Build memories, share adventures, and explore the
              creativity of friends in our pixel-perfect gallery.
            </p>
            <div className='card sm:w-[30rem] shadow-2xl bg-base-100'>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Sign Up</button>
                </div>
                <div className='form-control mt-4 text-center'>
                  <button
                    type='button'
                    className='btn btn-link'
                    onClick={() => navigate('/login')}
                  >
                    Already have an account? Log in now.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup

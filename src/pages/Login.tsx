import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import minecraftIcon from '../assets/4737386_minecraft_squircle_icon.png'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/') // Redirect to homepage upon successful login
    } catch (error) {
      setError('Login failed: ' + error.message) // Set the error message to state
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
              <h1 className='text-5xl font-bold'>CraftSnap Login</h1>
            </div>
            <p className='py-6 text-center' style={{ maxWidth: '40rem' }}>
              Log in to CraftSnap to continue crafting your story, sharing spectacular moments, and exploring the limitless creations of your community.
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
                  <button className='btn btn-primary'>Log In</button>
                </div>
                <div className='form-control mt-4 text-center'>
                  <button
                    type='button'
                    className='btn btn-link'
                    onClick={() => navigate('/signup')}
                  >
                    Need an account? Make one now!
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

export default Login

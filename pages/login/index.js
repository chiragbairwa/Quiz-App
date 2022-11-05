import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '../../firebase/authContext'
  // LOGIN FUNCTION
  const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: '',
    })
    const router = useRouter()
    const { user, login } = useAuth()
    // const { user, loginWithGoogle } = useAuth()

    const handleLogin = async (e) => {
      e.preventDefault()
        await login(loginInfo.email, loginInfo.password)
        .then(()=> {alert("done");router.push('/')}
        ).catch((err) => alert("Error"))
        
    }

    // const handleGoogle = async () => {
    //   try {
    //     await loginWithGoogle()
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    return (
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <p>Sign In</p>
          <input
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            type="email"
            className="input-field"
            placeholder="Enter Email"
            required
          />
          <br></br>

          <input
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            type="password"
            className="input-field"
            placeholder="Enter Password"
          />
          <br></br>

          {/* Login button */}

          <button type="submit" value="Login" className="btn login-btn">
            Sign In
          </button>
          <br></br>

          {/* Create Account button*/}
          <button
            onClick={() => router.push("/signup")}
            defaultValue="Signup"
            className="btn login-register-btn"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Options
        <div
          style={{
            width: '10rem',
            border: '0.5px solid #4e6ee0',
            margin: '16px 0',
          }}
        ></div>

        <button className="btn google-btn" onClick={handleGoogle}>
          Continue with Google
        </button> */}
      </div>
    )
}

export default Login

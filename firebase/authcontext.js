import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
} from 'firebase/auth'
import { auth } from './firebase'

import { useRouter } from 'next/router'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  // Loading state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else setUser(null)

      setLoading(false)
      return () => unsubscribe()
    })
  }, [])

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithRedirect(auth, provider)

      await getRedirectResult(auth).then((result) => {
        // The signed-in user info.
        debugger
        alert(result.user)
        // alert(user)
      })
    } catch (err) {
      alert(result.user)
      console.log(err)
    }
  }
  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }
  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, loginWithGoogle }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

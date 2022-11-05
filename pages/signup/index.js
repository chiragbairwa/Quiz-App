import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../firebase/authContext";

// SignUp Function
const SignUp = () => {
  const router = useRouter();

  const { user, signup } = useAuth();

  const [registerInfo, setregisterInfo] = useState({
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    alert("ok")

    await signup(registerInfo.email, registerInfo.password)
      .then(() => {
        alert("SignUp Completed");
        router.push("/login");
      })
      .catch((err) => {
        console.log("Error while signUp");
      });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <p>Register</p>

        <input
          value={registerInfo.name}
          onChange={(e) =>
            setregisterInfo({ ...registerInfo, name: e.target.value })
          }
          type="name"
          className="input-field"
          placeholder="Enter Username"
          required
        />
        <br></br>
        <input
          value={registerInfo.email}
          onChange={(e) =>
            setregisterInfo({ ...registerInfo, email: e.target.value })
          }
          type="email"
          className="input-field"
          placeholder="Enter Email"
          required
        />
        <br></br>

        <input
          value={registerInfo.password}
          onChange={(e) =>
            setregisterInfo({ ...registerInfo, password: e.target.value })
          }
          type="password"
          className="input-field"
          placeholder="Enter Password"
          required
        />
        <br></br>

        {/* Register button */}

        <input type="submit" value="Sign Up" className="btn register-btn" />
        <a className="register-back-btn" onClick={() => router.push("/login")}>
          Sign In
        </a>
      </form>
    </div>
  );
};

export default SignUp;

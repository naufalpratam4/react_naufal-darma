// src/components/SignUp.js
import { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign up successful");
    } catch (error) {
      console.error("Sign up error:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;

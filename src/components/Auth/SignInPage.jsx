import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import auth, { googleProvider } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigator = useNavigate();
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setError("");
      navigator("/");
      console.log("Logged in successfully", userCredential.user);
    } catch (err) {
      setError(err.message);
      console.error("Login failed", err);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigator("/");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="flex flex-col px-4">
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        variant="outlined"
        sx={{
          margin: "1vmax",
          input: { color: "white" }, // input text color
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#ccc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        type="password"
        variant="outlined"
        sx={{
          margin: "1vmax",
          input: { color: "white" }, // input text color
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#ccc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />
      <Button variant="contained" onClick={handleSignIn}>
        Sign In
      </Button>
      <Button onClick={handleSignInWithGoogle}>
        <Google sx={{ color: "white" }} />
        <span className="text-white pl-1 m-2">Sign In with Google</span>
      </Button>
    </div>
  );
}

export default SignInPage;

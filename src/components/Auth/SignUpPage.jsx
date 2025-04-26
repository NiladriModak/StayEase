import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import auth, { googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignUpPage() {
  const navigator = useNavigate();
  console.log(auth?.currentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigator("/");
    } catch (err) {
      toast.error("User exists");
    }
  };
  const handleSignUpWithGoogle = async () => {
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
          input: { color: "white" },
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
          input: { color: "white" },
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
      <Button variant="contained" onClick={handleSignUp}>
        Sign Up
      </Button>
      <Button onClick={handleSignUpWithGoogle}>
        <Google sx={{ color: "white" }} />
        <span className="text-white pl-1 m-2">Sign Up with Google</span>
      </Button>
    </div>
  );
}

export default SignUpPage;

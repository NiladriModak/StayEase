import { Toaster } from "react-hot-toast";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./config/firebase";
import { useEffect, useState } from "react";
import Loading from "./components/Loader/Loading";
import MyBookings from "./components/MyBookings/MyBookings";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Toaster position="top-center" />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/mybookings" element={<MyBookings />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

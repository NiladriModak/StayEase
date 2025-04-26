import { collection, getDocs, query, where } from "firebase/firestore";
import auth, { db } from "../config/firebase";
import toast from "react-hot-toast";

export const getAllBookings = async () => {
  try {
    const userId = auth?.currentUser?.uid;
    if (!userId) {
      throw new Error("User not logged in");
    }

    const allBookings = await getDocs(
      query(collection(db, "bookings"), where("userId", "==", userId))
    );

    const bookings = allBookings.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("", bookings);

    return bookings;
  } catch (error) {
    console.log(error);
    toast.error("Error in fetching bookings");
  }
};

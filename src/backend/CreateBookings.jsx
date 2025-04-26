import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import auth, { db } from "../config/firebase";
import toast from "react-hot-toast";
import { getAllBookings } from "./showAllBookings";

export async function createBookings(
  name,
  email,
  checkInDate,
  checkOutDate,
  destName,
  url
) {
  try {
    // console.log("from", email, name, checkInDate, checkOutDate);

    if (!auth || auth?.currentUser === null) {
      toast.error("Please sign in to book");
      return;
    }
    const userId = auth?.currentUser?.uid;
    const createBook = await addDoc(collection(db, "bookings"), {
      userId: userId,
      email: email,
      name: name,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      destName,
      url,
    });
    console.log("Booking created", createBook);
    toast.success("Booking created successfully");
    getAllBookings();
  } catch (error) {
    console.log("error createbooking", error);
    toast.success("Error in booking");
  }
}

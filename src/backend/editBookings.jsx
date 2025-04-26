import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import toast from "react-hot-toast";

export const editBooking = async (bookingId, updatedData) => {
  try {
    const bookingRef = doc(db, "bookings", bookingId);

    await updateDoc(bookingRef, updatedData);

    toast.success("Booking updated successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Error updating booking");
  }
};

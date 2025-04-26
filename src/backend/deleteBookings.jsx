import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import toast from "react-hot-toast";

export const deleteBooking = async (bookingId) => {
  try {
    const bookingRef = doc(db, "bookings", bookingId);

    await deleteDoc(bookingRef);

    toast.success("Booking deleted successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Error deleting booking");
  }
};

import React, { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import toast from "react-hot-toast";
import auth from "../../config/firebase";
import { editBooking } from "../../backend/editBookings";

export default function UpdateModal({ open, setOpen, edit, refreshBookings }) {
  console.log("eleeee->", edit);

  const [name, setName] = useState("");
  const [email, setEmail] = useState(auth?.currentUser?.email);
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs());

  const today = dayjs();

  useEffect(() => {
    if (edit) {
      setName(edit.name || "");
      setEmail(edit.email || auth?.currentUser?.email || "");

      if (edit.checkInDate?.seconds) {
        setCheckInDate(dayjs(edit.checkInDate.seconds * 1000));
      }
      if (edit.checkOutDate?.seconds) {
        setCheckOutDate(dayjs(edit.checkOutDate.seconds * 1000));
      }
    }
  }, [edit]);

  const handleSubmit = async () => {
    if (!name || !email || !checkInDate || !checkOutDate) {
      toast.error("Please fill all details");
      return;
    }
    if (checkOutDate.isBefore(checkInDate)) {
      toast.error("Check out date must be after check in date");
      return;
    }

    try {
      await editBooking(edit.id, {
        name,
        email,
        checkInDate: checkInDate.toDate(),
        checkOutDate: checkOutDate.toDate(),
      });
      await refreshBookings();
      setOpen(false);
      toast.success("Booking updated!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update booking");
    }
  };
  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update your booking</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            fullWidth
            margin="dense"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DatePicker
                label="Check in date"
                value={checkInDate}
                minDate={today}
                onChange={(val) => setCheckInDate(val)}
              />
              <DatePicker
                label="Check out date"
                value={checkOutDate}
                minDate={dayjs(checkInDate)}
                onChange={(val) => setCheckOutDate(val)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Button
            variant="contained"
            sx={{
              marginTop: "1vmax",
              backgroundColor: "black",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 1s",
              },
            }}
            onClick={handleSubmit}
          >
            Update now
          </Button>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              marginTop: "1vmax",
              marginLeft: "1vmax",
              color: "red",
              outline: "red",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 1s",
              },
            }}
          >
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

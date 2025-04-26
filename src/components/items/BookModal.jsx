import React, { useState } from "react";

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
import { createBookings } from "../../backend/CreateBookings";
import toast from "react-hot-toast";
import auth from "../../config/firebase";

export default function BookModal({ open, setOpen, destName, url }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(auth?.currentUser?.email);
  const [checkInDate, setCheckInDate] = useState(dayjs(Date.now()));
  const [checkOutDate, setCheckOutDate] = useState(dayjs(Date.now()));
  const today = dayjs();
  const handleSubmit = async () => {
    console.log(name, email, checkInDate, checkOutDate);

    if (!name || !email || !checkInDate || !checkOutDate) {
      toast.error("Please all details");
      return;
    }
    if (checkOutDate < checkInDate) {
      toast.error("Please enter valid date");
      return;
    }
    const adjustedCheckIn = checkInDate.hour(12).minute(0).second(0);
    const adjustedCheckOut = checkOutDate.hour(12).minute(0).second(0);
    await createBookings(
      name,
      email,
      adjustedCheckIn.toDate(),

      adjustedCheckOut.toDate(),
      destName,
      url
    );
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Book your adventure</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
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
            Book now
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

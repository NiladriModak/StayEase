import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Page from "../page";
import { Calendar, Pencil, Trash } from "lucide-react";
import { getAllBookings } from "../../backend/showAllBookings";
import { deleteBooking } from "../../backend/deleteBookings";
import UpdateModal from "./UpdateModal";

function MyBookings() {
  const [allbooks, setAllbooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState();
  async function getAll() {
    const p = await getAllBookings();
    setAllbooks(p);
  }
  useEffect(() => {
    getAll();
  }, []);

  console.log("all", allbooks);
  const handleDelete = async (id) => {
    await deleteBooking(id);
    const p = await getAllBookings();
    setAllbooks(p);
  };
  return (
    <Page>
      <div className="w-5/6 mt-10 rounded-2xl min-h-[80vh] border-2 border-slate-300 flex flex-col ">
        <h1 className="text-5xl w-full text-center font-bold">My Bookings</h1>
        {allbooks && allbooks.length > 0 ? (
          <div>
            {allbooks?.map((ele) => (
              <div className="mx-4 my-2 flex items-center justify-evenly px-4 h-52 bg-amber-50 rounded-2xl">
                <div className="w-72  ">
                  <img className="rounded-2xl" src={ele.url} alt="place" />
                </div>

                <div className="flex w-1/2   flex-col px-10 ">
                  <h1 className="text-3xl font-bold my-3">
                    Name : {ele.destName}
                  </h1>
                  <div className="flex w-full justify-between flex-col md:flex-row">
                    <h1 className="flex text-lg font-semibold">
                      <Calendar />
                      Check in date:{" "}
                      {JSON.stringify(
                        new Date(ele.checkInDate.seconds * 1000)
                      ).substring(1, 11)}
                    </h1>
                    <h1 className="flex text-lg font-semibold">
                      <Calendar />
                      Check out date:{" "}
                      {JSON.stringify(
                        new Date(ele.checkOutDate.seconds * 1000)
                      ).substring(1, 11)}
                    </h1>
                  </div>
                </div>
                <div className="flex w-1/6  justify-evenly">
                  <Pencil
                    onClick={() => {
                      setOpen(true);
                      setEdit(ele);
                    }}
                    className="cursor-pointer hover:fill-slate-950 transition-all duration-300"
                    size={28}
                  />
                  <Trash
                    onClick={() => handleDelete(ele.id)}
                    className="cursor-pointer hover:fill-red-400 transition-all duration-300"
                    size={28}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[70vh] flex justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-400 font-mono">
              No Bookings To Show
            </h1>
          </div>
        )}
      </div>
      <UpdateModal
        open={open}
        setOpen={setOpen}
        edit={edit}
        refreshBookings={getAll}
      />
    </Page>
  );
}

export default MyBookings;

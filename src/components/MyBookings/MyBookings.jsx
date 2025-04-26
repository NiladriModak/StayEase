import React, { useEffect, useState } from "react";
import Page from "../Page";
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

  const handleDelete = async (id) => {
    await deleteBooking(id);
    getAll();
  };

  return (
    <Page>
      <div className="w-11/12 max-w-7xl mx-auto mt-10 rounded-2xl min-h-[80vh] border-2 border-slate-300 flex flex-col">
        <h1 className="text-4xl md:text-5xl text-center font-bold my-6">
          My Bookings
        </h1>

        {allbooks && allbooks.length > 0 ? (
          <div className="flex flex-col gap-6">
            {allbooks.map((ele) => (
              <div
                key={ele.id}
                className="mx-4 flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-amber-50 rounded-2xl shadow-md"
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={ele.url}
                    alt="place"
                    className="w-full max-w-xs rounded-2xl object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col items-center md:items-start px-4">
                  <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                    {ele.destName}
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 w-full text-slate-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={20} />
                      <span>
                        Check-in:{" "}
                        {new Date(ele.checkInDate.seconds * 1000)
                          .toISOString()
                          .substring(0, 10)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={20} />
                      <span>
                        Check-out:{" "}
                        {new Date(ele.checkOutDate.seconds * 1000)
                          .toISOString()
                          .substring(0, 10)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Pencil
                    onClick={() => {
                      setOpen(true);
                      setEdit(ele);
                    }}
                    className="cursor-pointer hover:scale-110 hover:text-blue-500 transition-all"
                    size={28}
                  />
                  <Trash
                    onClick={() => handleDelete(ele.id)}
                    className="cursor-pointer hover:scale-110 hover:text-red-500 transition-all"
                    size={28}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[60vh] flex justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 font-mono">
              No Bookings To Show
            </h2>
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

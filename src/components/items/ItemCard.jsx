import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Add from "@mui/icons-material/Add";
import BookModal from "./BookModal";
import { ArrowUpRight } from "lucide-react";
function ItemCard({ ele }) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [url, setUrl] = useState("");
  return (
    <>
      <Card
        sx={{
          minWidth: 400,
          maxWidth: 450,
          flexShrink: 0,
          borderRadius: "12px",
          padding: "6px",
          paddingBottom: "10px",
          transition: "transform 0.3s ease",
          ":hover": {
            transform: "translateY(-8px)",
          },
        }}
        variant="outlined"
      >
        <div
          style={{
            position: "relative",
            height: 250,
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={ele.image}
            alt={ele.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "all 1s ease",
            }}
            className="hover:blur-sm"
          />
          <div
            className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            style={{ borderRadius: "12px" }}
          >
            <p className="text-white text-xl font-semibold">{ele.name}</p>
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {ele.name}
          </Typography>
          {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Duration: {ele.duration}
          </Typography> */}
          <Typography variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
            ₹{ele.rate} Per Night
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setOpen(true);
              setSelect(ele.name);
              setUrl(ele.image);
            }}
            sx={{
              backgroundColor: "black",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 1s",
              },
            }}
          >
            Book Now <ArrowUpRight />
          </Button>
          <Button size="small">ℹ️Learn More</Button>
        </CardActions>
      </Card>
      <BookModal open={open} setOpen={setOpen} destName={select} url={url} />
    </>
  );
}

export default ItemCard;

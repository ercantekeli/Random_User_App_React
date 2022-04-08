import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import "./Assets.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";



const AssetsMui = () => {
  const [card, setCard] = useState();
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    // response.data yerine {data} yazdik
    setCard(data.results[0]);
    // console.log(response.data.results);
  };
  //   console.log(card);
  const handleClick = () => {
    getApi();
  };
  return (
    <div className="card">
      <Card sx={{ maxWidth: 500 }} className="card-container">
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="250"
            width="250"
            image={card?.picture.large}
            alt="green iguana"
          />
          <CardContent className="cardbelow">
            <Typography gutterBottom variant="h5" component="div">
              {card?.name.title +
                " " +
                " " +
                card?.name.first +
                " " +
                " " +
                card?.name.last}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <nav>
                <p>
                  {" "}
                  <span>
                    <img className="logo" src={Email} alt="" />
                    {/* <Email /> */}
                  </span>
                  <span>{card?.email}</span>
                </p>
                <p>
                  {" "}
                  <span>
                    <img className="logo" src={Phone} alt="" />
                    {/* <Phone /> */}
                  </span>
                  <span>{card?.phone}</span>
                </p>
                <p>
                  {" "}
                  <span>
                    <img className="logo" src={Location} alt="" />
                    {/* <Email /> */}
                  </span>
                  <span>
                    {card?.location.city + "-" + card?.location.country}
                  </span>
                </p>
              </nav>
              <nav>
                <p>Age : {card?.dob.age}</p>
                <p>Register Date : {card?.registered.date.slice(0, 10)}</p>
              </nav>
              <Button variant="contained" onClick={handleClick}>
                RANDOM USER
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default AssetsMui;
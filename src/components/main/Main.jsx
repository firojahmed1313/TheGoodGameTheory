import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { productList } from "../../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import "./main.css";

const Main = () => {
  const dispatch = useDispatch();
  var data = useSelector((state) => state.apidata.filtereddata);
  const navigate = useNavigate();
  console.warn("data in main component1", data);
  console.log("data in main", typeof data);

  useEffect(() => {
    console.log("firoj1");
    dispatch(productList());
  }, [productList]);

  return (
    <div>
      
      <div className="product-container">
        {data.map((item) => {
          const newtitle =  item.name.substring(0, 10);
          const oldtitle =  item.name;
          return (
            <Card
              sx={{
                maxWidth: 250,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "15px",
              }}
              key={item.id}
            >
              {
                <CardMedia
                  sx={{ height: 350 ,width:150,margin:"auto"}}
                  image={item.image_url}
                  title="green iguana"
                />
              }
              <CardContent
                sx={
                  {
                    //border: "2px solid red"
                  }
                }
              >
                <Typography gutterBottom variant="h6" component="div">
                Name : {oldtitle.length >= 10 ? `${newtitle}..` : oldtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div>Target fg : {item.target_fg} </div>
                  <div>Volume : {item.volume.value} {item.volume.unit} </div>
                </Typography>
              </CardContent>
              <CardActions
                sx={
                  {
                    //border: "2px solid red",
                    
                  }
                }
              >
                <Button
                  
                  size="small"
                  onClick={() => navigate(`/videop/${item.id}`)}
                  target="_blank"
                >
                  See more
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

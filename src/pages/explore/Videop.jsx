import "./e.css";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardMedia from "@mui/material/CardMedia";


const Videop = () => {

  var data = useSelector((state) => state.apidata.apiidata);
  console.log(data);
  const { userId } = useParams();

  const remainingItems = data.filter((item) => item.id == userId);

  console.log(remainingItems);
  
  return (
    <>
      <h2 className="color_red">
        Title:{" "}
        {remainingItems[0].title
          ? remainingItems[0].title
          : remainingItems[0].name}
      </h2>
      {
        <div className="videop">
          <CardMedia
            className="pic"
            sx={{ height: 450 ,width: 150 }}
            image={remainingItems[0].image_url}
            title="green iguana"
          />
          <div className="accordionStyle">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Tagline</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{remainingItems[0].tagline}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>First brewed</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{remainingItems[0].first_brewed}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{remainingItems[0].description}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Ingredients</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {remainingItems[0].ingredients.malt[0].name}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Food pairing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{remainingItems[0].food_pairing}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Tips</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{remainingItems[0].brewers_tips}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Temp</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {remainingItems[0].method.mash_temp[0].temp.value}{" "}
                  {remainingItems[0].method.mash_temp[0].temp.unit}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Attenuation level</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{remainingItems[0].attenuation_level}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      }
      <Footer />
    </>
  );
};

export default Videop;

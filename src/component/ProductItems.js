import React from "react";
import PopUp from "./PopupDetail";
import "../style/Popup.css";
import { Button, Tooltip } from "@mui/material";
import { Box, FormControl } from "@mui/material";

export default function ProductItem(props) {
  const { onAdd } = props;
  const [loadImage, setLoadImage] = React.useState(false);
  const [buttonPopup, setButtonPopup] = React.useState(false);
  //Let user name item has been added.
  const addProduct = () => {
    onAdd({
      id: props.data.type,
      img: props.data.img,
      cost: props.data.pricePerLb,
    });
    alert("Item has been added to cart.");
  };
  const handleLoadImage = () => {
    setLoadImage(true);
  };
  return (
    <>
      <section>
        <Tooltip title={props.data.description} placement="top-start">
          <img
            src={props.data.img}
            className={`coffeeteaImage blur ${
              loadImage ? "coffeeteaImage focus" : ""
            }`}
            alt={props.data.type}
            onClick={() => setButtonPopup(true)}
            onLoad={handleLoadImage}
          />
        </Tooltip>
        <p className="coffeeteaType"> {props.data.type} </p>
        <p>
          1lb ${props.data.pricePerLb}
          <Button
            variant="outlined"
            size="small"
            color="success"
            className="buy"
            onClick={() => setButtonPopup(true)}>
            Buy
          </Button>
        </p>
      </section>
      {/* Popup Details */}
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div>
          <h2> {props.data.type} </h2>
          <img
            src={props.data.img}
            className="coffeeteaImage"
            alt={props.data.type}
          />
          <h3> Taste Description: {props.data.description} </h3>
          <Box sx={{ minWidth: 60 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              1lb: ${props.data.pricePerLb}
            </FormControl>
          </Box>
          <Button
            onClick={addProduct}
            variant="outlined"
            size="small"
            color="success"
            className="buy">
            Add to cart
          </Button>
        </div>
      </PopUp>
    </>
  );
}

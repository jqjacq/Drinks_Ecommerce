import React from "react";
import PopUp from "./PopupDetail"
import './Popup.css'
import { Button, Tooltip } from "@mui/material"
import {Box, FormControl } from "@mui/material"
//InputLabel, MenuItem, Select

export default function CoffeeItem(props) {
    // const [price, setPrice] = React.useState('');
    const { onAdd } = props
    const addProduct = () => {
        onAdd({id:props.data.type, 
            img: props.data.img, 
            cost:props.data.pricePerLb })
        alert("Item has been added to cart.")
    }
    // const handleChange = (event) => {
    //   setPrice(event.target.value);
    // };
    const [buttonPopup, setButtonPopup] = React.useState(false)
    return (
        <>
            <section>
                <Tooltip title = {props.data.description} placement="top-start">
                    <img src = {props.data.img} className="coffeeteaImage" 
                        alt = {props.data.type}
                        onClick={()=> setButtonPopup(true)}
                    />
                </Tooltip>
                    <p className = "bold"> {props.data.type} </p>
                    <p>1lb ${props.data.pricePerLb} 
                        <Button variant="outlined" size="small" color="success" className="buy"
                            onClick={()=> setButtonPopup(true)}> Buy
                        </Button> 
                    </p>
            </section>
            <PopUp trigger = {buttonPopup} setTrigger= {setButtonPopup}>
                <div>
                    <h2> {props.data.type} </h2>
                    <img src = {props.data.img} className="coffeeteaImage" alt = {props.data.type}/>
                    <h3> Taste Description: {props.data.description} </h3>
                    <Box sx={{ minWidth: 60 }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            {/* <InputLabel id="demo-simple-select-standard-label"> Price </InputLabel> */}
                            {/* <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select"
                                value={price}
                                label="Price"
                                onChange={handleChange}> */}
                                {/* <MenuItem value={1}>½lb: ${props.data.halfLb} </MenuItem> */}
                                {/* <MenuItem value={2}> */}
                                    1lb: ${props.data.pricePerLb}
                                {/* </MenuItem> */}
                            {/* </Select> */}
                        </FormControl>
                    </Box>
                    <Button onClick = { addProduct } variant="outlined" size="small" color="success" className="buy"> 
                        Add to cart 
                    </Button> 
                </div>
            </PopUp>
        </>
    )
}
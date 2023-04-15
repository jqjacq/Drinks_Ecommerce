import React from 'react'
import coffeetea from '../data/coffeetea'
import { Button, Tooltip } from "@mui/material"
import {Box, FormControl } from "@mui/material"
import PopUp from "./PopupDetail"
import "../style/index.css"
import '../style/Popup.css'

export default function FilterProduct({ category}) {
    const [buttonPopup, setButtonPopup] = React.useState(false)
    const { onAdd } = category
    const addProduct = () => {
        onAdd({id:category.data.type, 
            img: category.data.img, 
            cost:category.data.pricePerLb})
        alert("Item has been added to cart.")
    }
    const filteredData = coffeetea.filter(item => item.category === category);

    return (
        <div className="productimage-container contentmarginpadding">
          {filteredData.map(item => (
            <div>
            <section>
                <Tooltip title = {item.description} placement="top-start">
                    <img src = {item.img} className="coffeeteaImage" 
                        alt = {item.type}
                        onClick={()=> setButtonPopup(true)}
                    />
                </Tooltip>
                <p className = "coffeeteaType"> {item.type} </p>
                <p>1lb ${item.pricePerLb} 
                    <Button variant="outlined" size="small" color="success" className="buy"
                        onClick={()=> setButtonPopup(true)}> Buy
                    </Button> 
                </p>
            </section>
            <PopUp trigger = {buttonPopup} setTrigger= {setButtonPopup}>
                <div>
                    <h2> {item.type} </h2>
                    <img src = {item.img} className="coffeeteaImage" alt = {item.type}/>
                    <h3> Taste Description: {item.description} </h3>
                    <Box sx={{ minWidth: 60 }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    1lb: ${item.pricePerLb}
                        </FormControl>
                    </Box>
                    <Button onClick = {addProduct} variant="outlined" size="small" color="success" className="buy"> 
                        Add to cart 
                    </Button> 
                </div>
            </PopUp>
            </div>
          ))}
          </div>
      );
}

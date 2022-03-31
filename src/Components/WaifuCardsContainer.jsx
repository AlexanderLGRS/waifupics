import React from "react";
import './Styles/WaifuCardsContainer.css'

export default function WaifuCardsContainer(props){
    return(
        <React.Fragment>
            <div className="waifuCardsContainer">
                {props.children}
            </div>
        </React.Fragment>
    )
}
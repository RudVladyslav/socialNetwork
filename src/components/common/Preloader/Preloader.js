import preloader from "../../../assets/gif/Circles-menu-3.gif";
import React from "react";
import style from "./Preloader.module.css"


let Preloader = (props) =>{
    return(
        <div className={style.preloader_wrapper}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;

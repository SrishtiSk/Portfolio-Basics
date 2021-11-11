import React from 'react'
import FooterImg from './img/logo (1).png';

export default function Footer() {
    return (
        <div className="footer d__flex align__items__center justify__content__space__between pz-10"
                style={{padding:"10px 20px", zIndex:"100"}}>
            <img src={FooterImg} alt="" className="footer__img pointer"/>
            <span className="copyright" style={{color: "#c6c9d8", fontSize:"14px", opacity:"00.75"}}>Copyright @ 2021 programmer Srishti SK. All Rights Reserved.</span>
            
        </div>
    )
}

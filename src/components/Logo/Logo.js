import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () =>{
    return(
        <div className={'ma4 mt0'}>
            <Tilt className={'br2 shadow-2'} options={{ max : 45 }} style={{ height: 150, width: 150 }}>
                <div className={'Tilt-inner'}><img src={'http://cdn.onlinewebfonts.com/svg/img_432607.png'} style={{height:150}}/>️Brain</div>
            </Tilt>
        </div>
    )
}

export default Logo
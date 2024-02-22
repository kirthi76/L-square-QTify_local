import React from "react";
import './Hero.css';
import heroImage from "../../Assets/hero.png"

function Hero(){
    return (
        <div className="hero">
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={heroImage} width={212} alt="headphone"/>
                                
            </div>
        </div>
    )
}

export default Hero;
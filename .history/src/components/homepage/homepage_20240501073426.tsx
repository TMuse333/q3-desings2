import React from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";
import laptop from '../../media/laptop.jpg'
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import MultiLayerParallax from "../mountainParallax/mountainParallax";
import ParticlesComponent from "../particles/particles";
import nobgLaptop from '../../media/Gemini_Generated_Image_r055a1r055a1r055-removebg-preview.png'
import moneyBall from '../../media/futuristic-money-ball-removebg-preview.png'
import {description1} from '../../data/data.js'
const Homepage: React.FC = () => {

    return (
        <section className="absolute top-0 left-0 w-screen">

         
            <ParticlesComponent/>
            <MultiLayerParallax/>

            <TextParallaxContentExample/>

            <Content
            mainTitle='You need a great website'
            image={nobgLaptop}
            customText={null}
            reverse={true}
            description={null}
            floatingImage={true}
            hasAnimation={true}
            />

<Content
            mainTitle='Benefits of a website'
            image={moneyBall}
            customText={null}
            reverse={false}
            description={null}
            floatingImage={true}
            hasAnimation={true}
            />
            
        </section>
    )
}


export default Homepage
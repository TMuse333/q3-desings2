import React, { useEffect } from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";
import laptop from '../../media/laptop.jpg'
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import MultiLayerParallax from "../mountainParallax/mountainParallax";
import ParticlesComponent from "../particles/particles";
import nobgLaptop from '../../media/Gemini_Generated_Image_r055a1r055a1r055-removebg-preview.png'
import moneyBall from '../../media/futuristic-money-ball-removebg-preview.png'
import { description1 } from "../../data/data";
import AlternatingText from "../alternatingText/alternatingText";
import CircleContent from "../circleContent/appearingCircle";
import CircleListElement from "../circleListElement/circleListElement";


const Homepage: React.FC = () => {


    useEffect(() => {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime, 'milliseconds');
    }, []);

    

    return (
        <section className="absolute top-0 left-0 w-screen">

         
            {/* <ParticlesComponent/> */}
            {/* <MultiLayerParallax/> */}

            {/* <TextParallaxContentExample/> */}

            {/* <Content
            mainTitle='Your digital presence is important'
            image={nobgLaptop}
            customText={null}
            reverse={true}
            description={description1}
            floatingImage={true}
            hasAnimation={true}
            />

            <AlternatingText/>

            <Content
            mainTitle='Benefits of a website'
            image={moneyBall}
            customText={<TextFormat
            isAnimated={true}
            reverse={false}/>}
            reverse={false}
            description={null}
            floatingImage={true}
            hasAnimation={true}
            
            /> */}

            {/* <CircleContent/> */}

            </>
            
        </section>
    )
}


export default Homepage
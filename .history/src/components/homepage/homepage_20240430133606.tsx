import React from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";
import laptop from '../../media/laptop.jpg'
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import MultiLayerParallax from "../mountainParallax/mountainParallax";
import ParticlesComponent from "../particles/particles";
import nobgLaptop from 'src/media/Gemini_Generated_Image_r055a1r055a1r055-removebg-preview.png'
const Homepage: React.FC = () => {

    return (
        <section className="absolute top-0 left-0 w-screen">
            {/* <Content
            mainTitle={null}
            image={laptop}
            customText=
            {<TextFormat
            reverse={false}
            isAnimated={null}/>
        }

            description={null}
            reverse={false}
            /> */}

         
<ParticlesComponent/>
            <MultiLayerParallax/>

            <TextParallaxContentExample/>

            <Content
            mainTitle='You need a great website'
            image={laptop}
            customText={null}
            reverse={false}
            description={null}
            />
            
        </section>
    )
}


export default Homepage
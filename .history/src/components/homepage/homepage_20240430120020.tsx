import React from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";
import laptop from '../../media/laptop.jpg'
import { TextParallaxContentExample } from "../parallaxText/parallaxText";

const Homepage: React.FC = () => {

    return (
        <section className="absolute top-0 left-0 w-screen">
            <Content
            mainTitle={null}
            image={laptop}
            customText=
            {<TextFormat
            reverse={false}
            isAnimated={null}/>
        }

            description={null}
            reverse={false}
            />

            <TextParallaxContentExample/>

            <Content
            mainTitle='You need a great website'
            
        </section>
    )
}


export default Homepage
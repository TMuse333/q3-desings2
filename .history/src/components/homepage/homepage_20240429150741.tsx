import React from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";
import laptop from 'src/media/laptop.jpg'
const Homepage: React.FC = () => {

    return (
        <section className="absolute top-0 left-0 w-screen">
            <Content
            image={q3}
            customText=
            {<TextFormat
            reverse={false}
            isAnimated={null}/>}
            description={null}
            reverse={false}
            />
            
        </section>
    )
}


export default Homepage
import React from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";

const Homepage: React.FC = () => {

    return (
        <section className="absolute top-0 left-0">
            <Content
            image={q3}
            customText=
            // {<TextFormat
            // isAnimated={null}/>}
            />
        </section>
    )
}


export default Homepage
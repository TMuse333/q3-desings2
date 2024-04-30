import React from "react";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'

const Homepage: React.FC = () => {

    return (
        <section className="absolute top-0 left-0">
            <Content
            image={q3}
            customText={c}
            />
        </section>
    )
}


export default Homepage
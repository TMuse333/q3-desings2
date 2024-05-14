import React from "react";
import { CircleInfoGraphic } from "../circleInfographic/circleInfoGraphic";
import Content from "../content/content";
import q3 from '../../media/q3-visuals-logo-2.png'
import TextFormat from "../textFormat/textFormat";

// import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import MultiLayerParallax from "../mountainParallax/mountainParallax";
// import ParticlesComponent from "../particles/particles";
import nobgLaptop from '../../media/Gemini_Generated_Image_r055a1r055a1r055-removebg-preview.png'
import moneyBall from '../../media/futuristic-money-ball-removebg-preview.png'
import { description1 } from "../../data/data";
import AlternatingText from "../alternatingText/alternatingText";

import CircleList from "../circleListElement/circleList";
import Carousel from "../carousel/carousel";
import { AuroraHero } from "../auroraHero/auroraHero";
import Navbar from "../navbar/navbar";


const Homepage: React.FC = () => {

   const images = [
    {
        url:moneyBall,
        imageIndex:0,
        title:'The Money Ball',
        description:'Shooting the money ball like Larry Bird'
        }
    ,
    {
        url:q3,
        imageIndex:1,
        title:'The original Q3 Logo',
        description:'Inspired by the many trips the leader of Q3 Designs has taken to the quantum realm'
        }
    ,
    {
        url:nobgLaptop,
        imageIndex:2,
        title:'A Futuristic Laptop',
        description:'A smooth futuristic Laptop that shows the modern designs that Q3 Designs like to do'
        }
    
   ]


    // useEffect(() => {
    //     const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    //     console.log('Page load time:', loadTime, 'milliseconds');
    // }, []);

    

    return (
        <>
        <div className="relative">

            
              <Navbar/>

        <section className="absolute top-10 left-0 w-screen h-screen z-2
     ">



            {/* <ParticlesComponent/> */}
            <MultiLayerParallax/>

          
            <div className=" bg-gradient-to-b from-[#043747] via-[#032029] to-transparent w-screen">
            <Content
            mainTitle='Your digital presence is important'
            image={nobgLaptop}
            customText={null}
            reverse={true}
            description={description1}
            floatingImage={true}
            hasAnimation={true}
            /> 
            </div>

            {/* <AlternatingText/>
            <div className="relative bg-gradient-to-b from-[#043747] via-[#032029] to-transparent w-screen">
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
            
            /> 
            </div>
                   
<div className="relative bg-gradient-to-b from-[#043747] via-[#032029] to-transparent w-screen">
<CircleList/>


</div>

<div className="relative bg-gradient-to-b from-transparent via-[#043747] to-[#032029] w-screen
flex flex-col justify-center items-center">

<CircleInfoGraphic/>
</div>
<div className="relative bg-gradient-to-b from-[#043747] via-[#032029] to-transparent w-screen">


<h1 className="  bg-gradient-to-br from-white to-gray-400 bg-clip-text">Creating excellence</h1>
<p>We care deeply about the quality of all of our 
    work, here are some of the projects we have done in the past!
</p>


<Carousel images={images}
hasDescription={true}
/>

</div>

<AuroraHero/> */}










            
        </section>
        </>
    )
}


export default Homepage
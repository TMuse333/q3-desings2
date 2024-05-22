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

// import lambo from '../../media/green-lambo-ref-2.svg'
import village from '../../media/quantum-village.jpg'

import lambo from '../../media/likambo-logo-black-bg-final.png'
import cards from '../../media/card-game2-screenshot.png'
import portfolio from '../../media/portfolio2-screenshot.png'
import sainey from '../../media/sainey-media-picture.png'

const Homepage: React.FC = () => {

   const images = [
    {
        url:sainey,
        imageIndex:0,
        title:'Sainey Media',
        description:'A landing page made for a media marketing agency that has worked with the NBA, Bleacher Report and fitness influencer accounts with over 70k followers, Sainey Media'
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
        url:ca,
        imageIndex:2,
        title:'A Futuristic Laptop',
        description:'A smooth futuristic Laptop that shows the modern designs that Q3 Designs like to do'
        },
        {
            url:lambo,
            imageIndex:3,
            title:'Lambo',
            description:'dropping the top ona lambo'
        },
        {
            url:village,
            imageIndex:4,
            title:'the quantum village',
            description:'welcome to the quantum village'
        }
    
   ]


    // useEffect(() => {
    //     const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    //     console.log('Page load time:', loadTime, 'milliseconds');
    // }, []);

  

    

        const navLinks = [
            {
                name: 'Contact',
               
                secondaryLinks: [
                    { destination: 'dest1', name: 'Dest1' },
                    { destination: 'dest2', name: 'Dest2' },
                    { destination: 'dest3', name: 'Dest3' }
                ],
                listSubMenu:false
            },
            {
                name: 'Our Work',
              
                secondaryLinks: [
                    { destination: 'custom-homes', name: 'Web Design' },
                    { destination: 'commercial-construction', name: 'Logos' },
                    { destination: 'retail-homes', name: 'Software solutions' }
                ],
                listSubMenu:true
            },
            {
                name:'Extras',
                secondaryLinks: [
                    {
                        destination:'Focus-tactics',
                        name:'The value of focus'
                        
                    },
                    {
                        destination:'Mastery',
                        name:'Master your craft'
                    },
                    {
                        destination:'Work-tolerance',
                        name:'Increasing Work Capacity'
                    }
                ],
                listSubMenu:false
            }
        ];
          
    


    

    return (
        <>
        {/* <div className="relative"> */}
        <Navbar
        links={navLinks}/>
            {/* </div> */}
            

        <section className="absolute top-[0%] left-0 w-screen h-screen z-2
     ">

{/* <img src={lambo}

 className='w-[23vw] ml-auto mr-auto mt-[15rem]'
 /> */}


            {/* <ParticlesComponent/> */}
            <MultiLayerParallax/>

          
            <div className="relative z-1 bg-gradient-to-b from-[#043747] via-[#032029] to-transparent w-screen">
            <Content
            mainTitle='Your digital presence is important'
            image={nobgLaptop}
            customText={null}
            reverse={true}
            description={description1}
            floatingImage={false}
            hasAnimation={false}
            /> 
            </div>

            <AlternatingText/>
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

<AuroraHero/>










            
        </section>
        </>
    )
}


export default Homepage
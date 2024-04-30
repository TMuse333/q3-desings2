import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({

      fullScreen:{
        enable:true,
        // width:'300px'
  
      },

    


      background: {
        color: {
          value: "#100000",
        },
      
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#00bfff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "random",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
          trails:true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "polygon",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: false,
    }),
    []
  );

  if (init) {
    return (
      <>
   
   
      <Particles
        id="particles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          
      }}
      />
        </>
    );
  }

  return <></>;
};

export default ParticlesComponent;
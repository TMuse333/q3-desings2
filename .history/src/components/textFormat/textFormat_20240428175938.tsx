import React from "react";

// Define the type for props (if any)


// Define the functional component and specify the type for props
const TextFormat: React.FC = () => {

    const points: string[] = [
        'be a real one',
        'dont stop, keep going',
        'go to the quantum realm',
        'go to the gym',
        'playas play, playa'
    ]

  return (
    <article className="w-screen
     
    absolute top-0 left-0">
      <h1 className="text-2xl pb-5">Lorem ipsum dolor sit.</h1>
      <p className="text-lg w-screen
       pr-2 pl-4 
       text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem!</p>
      <ul className="text-left pl-8 pt-5 list-disc">
        {points.map((point,index) => (
            <li key={index}>
                {point}
            </li>
        ))}
            <button className="mt-5 w-3/5
            ">slat</button>
      </ul>
  
    </article>
  );
};

export default TextFormat;

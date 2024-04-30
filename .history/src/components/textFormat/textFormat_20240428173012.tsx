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
    <article className="w-screen flex ">
      <h1 className="text-2xl pb-5">Lorem ipsum dolor sit.</h1>
      <p className="text-lg w-screen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem!</p>
      <ul>
        {points.map((point,index) => (
            <li key={index}>
                {point}
            </li>
        ))}
      </ul>
    </article>
  );
};

export default TextFormat;

const YourComponent = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <article className="text-center">
          <h1 className="text-2xl pb-5">Lorem ipsum dolor sit.</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem!</p>
          <ul>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  };
  
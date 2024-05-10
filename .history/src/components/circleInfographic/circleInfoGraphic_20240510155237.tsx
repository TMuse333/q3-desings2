import React from "react";



const CircleElement = () => {

    return (
        <section className="rounded-full bg-q-blue
        h-[70vw] w-[70vw]">
            <h1>Runded element</h1>
        </section>
    )
}


export const CircleInfoGraphic = () => {

    return (
        <section className="flex justify-center">
            <CircleElement/>
        </section>
    )
}
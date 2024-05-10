import React from "react";



const CircleElement = () => {

    return (
        <section className="rounded-full bg-[#232a91]
        h-[70vw] w-[70vw] border border-q-blue
        flex flex-col items">
            <h1 className="text-lg">Rounded element</h1>
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
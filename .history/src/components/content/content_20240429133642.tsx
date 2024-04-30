import react, {useState, useEffect} from 'react'

interface contentProps {
    image: string,
    customText: React.ReactNode 
}

const Content: React.FC<contentProps> = ({image, customText}) => {

    return (
        <article className='flex flex-col justify-center align-center
        md:flex-row relative max-w-[1200px] mr-auto ml-auto'>

            <img
            className='w-[90vw] h-[55vw] object-cover 
             ml-auto mr-auto max-h-[500px]' src={image}/>
            {customText ? (
                <>
                {customText}
                </>
            ) : <p className='mt-6 pl-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error laudantium, sapiente natus soluta dolor tempora laborum dolores dolorum nisi!<br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officia illum, distinctio impedit eos ipsum unde recusandae voluptatum, expedita natus labore. Soluta laboriosam tenetur mollitia quis vitae itaque? Porro obcaecati error optio quasi fugit fugiat voluptate nostrum delectus non repellat.
            <br/>
            <button className='mt-4 -translate-x-2'>slat</button></p>}
        </article>
    )

}

export default Content
import react, {useState, useEffect} from 'react'

interface contentProps {
    image: string,
    customText: React.ReactNode || null
}

const Content: React.FC<contentProps> = ({image, customText}) => {

    return (
        <article className='flex flex-col justfiy-center align-center'>
            <img
            className='w-4/5 ml-auto mr-auto' src={image}/>
            slatty
        </article>
    )

}

export default Content
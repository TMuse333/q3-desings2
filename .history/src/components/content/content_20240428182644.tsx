import react, {useState, useEffect} from 'react'

interface contentProps {
    image: string
}

const Content: React.FC<contentProps> = ({image}) => {

    return (
        <article className='flex flex-col justfiy-center align-center'>
            <img
            className='w-4/5' src={image}/>
            slatty
        </article>
    )

}

export default Content
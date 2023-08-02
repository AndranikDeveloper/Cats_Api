import { Skeleton } from '@mui/material'
import React from 'react'
import './ShowCats.css'
import Modal from '../Modal/Modal'

const ShowCats = ({ url, categories, category }) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleModal = () => {
        setIsOpen(prev => !prev)
    }

    React.useEffect(() => {
        const image = new Image()
        image.src = url

        image.onload = () => {
            setIsLoaded(true)
        }

    }, [url])
    return (
        <div className='cats__content'>
            {
                isLoaded
                    ?
                        <img onClick={toggleModal} className='cats__image' src={url} />
                    :
                    <Skeleton
                        variant="rectangular"
                        width={'150px'}
                        height={'150px'}
                        animation="pulse"
                        sx={{ margin: '20px', borderRadius: '20px' }}
                    />
            }

            {
                isOpen && <Modal categories={categories} category={category} toggleModal={toggleModal} url={url}/>
            }
        </div>
    )
}

export default ShowCats
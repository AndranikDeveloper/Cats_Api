import React from 'react'
import './Modal.css'

const Modal = ({ toggleModal, categories,  category, url }) => {

    React.useEffect(() => {
        document.body.classList.add("active-body")
        return () => {
            document.body.classList.remove("active-body")
        }
    }, [])

    const categoryTitle = categories.find(c => c.categoryId === category).title

    return (

        <div className='modal'>
            <div onClick={toggleModal} className='modal__bgc'></div>
            <div className='modal__content'>
                <img className='modal__image' src={url} />

                <div className='modal__info'>
                    <div className='modal__text'>The Category called: {categoryTitle}</div>                    
                </div>

                <div onClick={toggleModal} className='close'>CLOSE</div>
            </div>
        </div>

    )
}

export default Modal
import React from 'react'
import "./Contact.css"
import image from '../Image1/my.png'

function Contact() {

    return (
        <div>
            <img src={image} alt="image" style={{ width: "400px", marginTop: "60px" }} />
            <h3 className='P'>Phone : 9556609926</h3>
            <h3 className='P'>email : nnsahu2022@gmail.com</h3>
            <a className='L' href="https://www.linkedin.com/in/nrusinghanath-sahu-b373a8243/" target="_blank">LinkIn</a>
            <a className='L' href="https://www.instagram.com/_.rahul._.kumar.__/" target="_blank">Instagram</a>
        </div>
    )
}

export default Contact
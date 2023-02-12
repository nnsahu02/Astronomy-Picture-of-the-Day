import React from 'react'
import "./Contact.css"
import image from '../Image1/my.png'
import image1 from '../Image1/jb.png'

function Contact() {

    return (
        <div >
            <div className='ab'>
                <img src={image1} alt="image" style={{ width: "350px", marginTop: "60px" }} />
                <h3 className='P'>Phone : 8328915901</h3>
                <h3 className='P'>email : jyotibissoyikhusbu2571@gmail.com</h3>
                <a className='L' href="https://www.linkedin.com/in/jyoti-bissoyi-a30bb0242/" target="_blank">LinkedIn</a>
                <a className='L' href="https://www.instagram.com/iam_jyoti_______/" target="_blank">Instagram</a>
            </div>

            <div className='abc'>
                <img src={image} alt="image" style={{ width: "350px", marginTop: "60px" }} />
                <h3 className='P'>Phone : 9556609926</h3>
                <h3 className='P'>email : nnsahu2022@gmail.com</h3>
                <a className='L' href="https://www.linkedin.com/in/nrusinghanath-sahu-b373a8243/" target="_blank">LinkedIn</a>
                <a className='L' href="https://www.instagram.com/_.rahul._.kumar.__/" target="_blank">Instagram</a>
            </div>
        </div>
    )
}

export default Contact
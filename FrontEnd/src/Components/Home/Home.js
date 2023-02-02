import React, { useState, useEffect } from 'react'
import './Home.css'
//import axios from 'axios'

const Home = () => {
    const [getData, setGetData] = useState([])
    const getHome = async () => {
        const response = await fetch('http://localhost:3001/apod')
        const data = await response.json()
        //console.log(data.data)
        setGetData(data.data)
    }
    console.log(getData)
    useEffect(() => {
        getHome()
    }, [])

    return (
        <div className="container1">
            {
                getData.map((x) => {
                    return (
                        <div key={x.date}>
                            <h1 className='H1'>Astronomy Picture of the Day</h1>
                            <img className='tab-pane active' src={x.url} alt="imag" style={{ width: "100%" }} />
                            <h1 className='ttt'>{x.title}</h1>
                            <h3 className='ttt'>Illustration Credit & Copyright : {x.copyright}</h3>
                            <h2 className='ttt'>Date : {x.date}</h2>
                            <div className='ttt'>Explanation : {x.explanation}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home


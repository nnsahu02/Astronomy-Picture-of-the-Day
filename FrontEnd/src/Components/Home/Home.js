import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
    const [getData, setGetData] = useState([])
    const getHome = async () => {
        const response = await fetch('https://astronomy-picture-of-the-day-1.onrender.com/apod')
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
                            <h1 className='HomeTitle'>Astronomy Picture of the Day</h1>
                            <div>
                                {
                                    x.media_type === "image" ? (
                                        <img className='img' src={x.url} alt="imag"  />
                                    ) : (
                                        <iframe
                                            title='space_video'
                                            src={x.url}
                                            //frameBorder="0"
                                            allow='encrypted-media'
                                            allowFullScreen
                                            className='photo'

                                        />
                                    )
                                }
                            </div>

                            <div className='description'>
                                <h1 className='ttt1'>{x.title}</h1>
                                <h3 className='ttt2'>Illustration Credit & Copyright : {x.copyright}</h3>
                                <h2 className='ttt3'>Date : {x.date}</h2>
                                <div className='ttt4'>Explanation : {x.explanation}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home


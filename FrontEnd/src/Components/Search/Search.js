import React, { useState, useEffect } from 'react'
import './Search.css'
import moment from "moment"

const Search = () => {
    const [Date, setDate] = useState("");
    const [getData, setGetData] = useState([])

    const getSearch = async () => {
        const now = moment().format("YYYY-MM-DD")

        if (Date >= "2015-01-01" && Date <= now) {
            const response = await fetch(`http://localhost:3001/apod?date=${Date}`)
            const data = await response.json()
            setGetData(data.data)

        } else if (Date != "") {
            alert("Please select a date between January 1, 2015 and today.")
        }
    }

    useEffect(() => {
        getSearch()
    }, [])
    return (
        <div className="container2">
            <h1 className='HomeTitle'>Select date</h1>
            <div className='Input1'>
                <input className='Input' type="Date" onChange={(e) => setDate(e.target.value)} />
                <button className='Button' onClick={getSearch}>search</button>
            </div>
            {
                getData.map((x) => {
                    return (
                        <div key={x.date}>
                            <h1 className='HomeTitle'>Astronomy Picture of {x.date}</h1>
                            <div>
                                {
                                    x.media_type === "image" ? (
                                        <img className='img1' src={x.url} alt="imag"  />
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

                            <div className='description1'>
                                <h1 className='ttt5'>{x.title}</h1>
                                <h3 className='ttt6'>Illustration Credit & Copyright : {x.copyright}</h3>
                                <h2 className='ttt7'>Date : {x.date}</h2>
                                <div className='ttt8'>Explanation : {x.explanation}</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default Search
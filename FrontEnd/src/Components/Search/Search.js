import React, { useState, useEffect } from 'react'
import './Search.css'

const Search = () => {
    const [Date, setDate] = useState("");
    const [getData, setGetData] = useState([])
    const getSearch = async () => {
        const response = await fetch(`http://localhost:3001/apod?date=${Date}`)
        const data = await response.json()
        //console.log(data.data)
        setGetData(data.data)
    }
    //console.log(Date)
    console.log(getData)
    useEffect(() => {
        getSearch()
    }, [])

    return (
        <div className="container2">
            <h1 className='H1'>Select date</h1>
            <div>
                <input className='Input' type="Date" onChange={(e) => setDate(e.target.value)} />
                <button className='Button' onClick={getSearch}>search</button>
            </div>
            {
                getData.map((x) => {
                    return (
                        <div key={x.date}>
                            <h1 className='H1'>Astronomy Picture of {x.date}</h1>
                            <img className='tab-pane active' src={x.url} alt="imag" style={{ width: "70%" }} />
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

export default Search
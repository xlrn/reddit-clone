import React, { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function TopGrowing () {
    const [subReddits, setSubreddits] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/subreddits/default/.json")
            .then(response => response.json())
                .then(responseJson => {
                    // console.log(responseJson)
                    setSubreddits(responseJson.data.children.slice(0, 5));
                });

    }, [setSubreddits])

    return (
        <div className='border rounded-3 pb-3 mt-3 content-card'>
            <div className='pt-5 pb-3 text-start' style={{backgroundImage: `url("../wood.jpg")`}}>
                <span className='text-white ms-3'>Today's Top Growing Communities</span>
            </div>
            <ul className="nav nav-pills flex-column mb-auto">
            {subReddits.map((subReddit, index) => {
                return (
                    <li className='border-top nav-item py-2' key={subReddit.data.name + "topgrowing"}>
                        <div className='d-flex align-items-center flex-wrap'>
                            <span className='fs-5 ms-4 me-2'>
                                {index + 1}
                            </span>
                            <ArrowDropUpIcon className='text-success me-1'></ArrowDropUpIcon>
                            <span className="me-4 d-inline-block">
                            {
                                subReddit.data.icon_img ? 
                                <img className="rounded-circle" style={{width: "32px", height: "32px"}} src={subReddit.data.icon_img} alt={subReddit.data.display_name_prefixed}></img> :
                                    <div className="rounded-circle bg-info text-center mt-1" style={{width: "32px", height: "32px", fontSize: "19px"}}>
                                        r/
                                    </div>
                            }   
                            </span>
                            <span className='fs-5'>
                                {subReddit.data.display_name_prefixed}
                            </span>
                        </div>
                    </li>
                )
            })}
            </ul>
            <button type='button' className='btn btn-primary w-75 rounded-pill my-2'> View All </button>
            <div className='d-flex flex-wrap justify-content-between'>
                <button type='button' className='btn btn-light text-primary mx-1' style={{fontSize: "12px"}}>Gaming</button>
                <button type='button' className='btn btn-light text-primary mx-1' style={{fontSize: "12px"}}>News</button>
                <button type='button' className='btn btn-light text-primary mx-1' style={{fontSize: "12px"}}>Outdoors</button>
                <button type='button' className='btn btn-light text-primary mx-1' style={{fontSize: "12px"}}>Aww</button>
            </div>
        </div>
    )
}

export default TopGrowing;
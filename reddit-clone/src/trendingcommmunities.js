import React, { useState, useEffect } from 'react';

function TrendingCommunities () {
    const [subReddits, setSubreddits] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/subreddits/default/.json")
            .then(response => response.json())
                .then(responseJson => {
                    // console.log(responseJson)
                    setSubreddits(responseJson.data.children.slice(5, 10));
                });

    }, [setSubreddits])
    return (
        <div className='border rounded-3 pb-3 mt-3 content-card'>
            <div className='pt-5 pb-3 text-start' style={{backgroundImage: `url("../wood.jpg")`}}>
                <span className='text-white ms-3'>Today's Top Growing Communities</span>
            </div>
            <ul className="nav nav-pills flex-column mb-auto">
            {subReddits.map(subReddit => {
                return (
                    <li className='border-top nav-item py-2' key={subReddit.data.name + "trendingcommunity"}>
                        <div className='d-flex align-items-center flex-wrap'>
                            <span className="ms-3 me-2 d-inline-block">
                            {
                                subReddit.data.icon_img ? 
                                <img className="rounded-circle" style={{width: "32px", height: "32px"}} src={subReddit.data.icon_img} alt={subReddit.data.display_name_prefixed}></img> :
                                    <div className="rounded-circle bg-info text-center mt-1" style={{width: "32px", height: "32px", fontSize: "19px"}}>
                                        r/
                                    </div>
                            }   
                            </span>
                            <div className='flex-column text-start'>
                                <div style={{fontSize: "12px"}}>
                                    {subReddit.data.display_name_prefixed}
                                </div>
                                <div style={{fontSize: "12px"}}>
                                    {subReddit.data.subscribers + " members "}
                                </div>
                            </div>
                            <button type='button' className='btn btn-light border border-primary rounded-pill text-primary ms-auto me-3' style={{width: "90px"}}> Join </button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default TrendingCommunities;
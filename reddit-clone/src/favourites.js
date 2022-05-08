import React, { useState, useEffect } from 'react';
import SubRedditNav from './subredditnav';

function Favourites() {
    const [subReddits, setSubreddits] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/subreddits/popular/.json")
            .then(response => response.json())
                .then(responseJson => {
                    // console.log(responseJson)
                    setSubreddits(responseJson.data.children.slice(0, 5));
                });

    }, [setSubreddits])

    return(
        <div className="d-flex flex-column my-4 text-start">
            <h5 className='ms-3 text-muted'>Favourites</h5>
            <ul className="nav nav-pills flex-column mb-auto">
            {subReddits.map(subReddit => {
                return <SubRedditNav key={subReddit.data.name} data={subReddit.data}></SubRedditNav>
            })}
            </ul>
        </div>
    )
}

export default Favourites;
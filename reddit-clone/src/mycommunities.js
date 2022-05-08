import React, { useState, useEffect } from 'react';
import SubRedditNav from './subredditnav';
import Accordion from 'react-bootstrap/Accordion'

function MyCommunities() {
    const [subReddits, setSubreddits] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/subreddits/new/.json")
            .then(response => response.json())
                .then(responseJson => {
                    // console.log(responseJson)
                    setSubreddits(responseJson.data.children.slice(0, 5));
                });

    }, [setSubreddits])

    return(
        <Accordion flush>
            <Accordion.Item>
                <Accordion.Header>View My Communities</Accordion.Header>
                <Accordion.Body>
                    <ul className="nav nav-pills flex-column mb-auto">
                        {subReddits.map(subReddit => {
                            return <SubRedditNav key={"community"+subReddit.data.name} data={subReddit.data}></SubRedditNav>
                        })}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )    
}

export default MyCommunities;
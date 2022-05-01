import SideBarLeft from "./sidebarleft";
import Card from "./card";
import React, { useState, useEffect } from 'react';

function Content(props) {
    const [posts, setPosts] = useState([]);
    // add response.ok check here somewhere later
    useEffect(() => {
        fetch(props.api)
            .then(response => response.json())
                .then(responseJson => {
                    setPosts(responseJson.data.children)
                })
    }, [setPosts, props])

    return (
        <div className="d-flex">
            <SideBarLeft></SideBarLeft>
            <div className="col-6">
                {posts.map(post => <Card key={post.data.name} data={post.data}></Card>)}
            </div>
        </div>
    )
}

export default Content;
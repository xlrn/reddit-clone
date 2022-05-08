import SideBarLeft from "./sidebarleft";
import Card from "./card";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PostBar from "./postbar";
import SideBarRight from "./sidebarright";

function Content() {
    const [posts, setPosts] = useState([]);
    // add response.ok check here somewhere later
    const location = useLocation();

    useEffect(() => {
        fetch("https://www.reddit.com" + location.pathname + ".json")
            .then(response => response.json())
                .then(responseJson => {
                    setPosts(responseJson.data.children)
                })
    }, [setPosts, location])

    return (
        <div className="d-flex">
            <SideBarLeft></SideBarLeft>
            <div className="col-6 offset-md-1">
                <PostBar></PostBar>
                {posts.map(post => <Card key={post.data.name} data={post.data}></Card>)}
            </div>
            <SideBarRight></SideBarRight>
        </div>
    )
}

export default Content;
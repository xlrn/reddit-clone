import React, { useState, useEffect } from 'react';

function Card(data) {
    const [isRedditMedia, setIsRedditMedia] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [mediaUrl, setMediaUrl] = useState("");
    const [permalink, setPermalink] = useState("");
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [subreddit, setSubreddit] = useState("");
    const [show, setShow] = useState(false);

    let embed = <div></div>

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (isRedditMedia) {
        if (isVideo) {
            embed = 
                // <div className='ratio ratio-1x1'>
                //     <video src={mediaUrl} controls></video>
                // </div>
                <div></div>
        }
        else {
            embed =
                <div>
                    <img className="img-fluid" src={mediaUrl}></img>
                </div>
        }
    }

    useEffect(() => {
        setTitle(data.data.title);
        setSubreddit(data.data.subreddit_name_prefixed);
        setIsRedditMedia(data.data.is_reddit_media_domain);
        setIsVideo(data.data.is_video);
        setPermalink('https://reddit.com'+data.data.permalink);
        setUser(data.data.author);
        if (isVideo) {
            setMediaUrl(data.data.media.reddit_video.fallback_url);
        }
        else {
            setMediaUrl(data.data.url);
        }
    }, [setIsRedditMedia, setIsVideo, setMediaUrl])

    return (
        <div className="border py-3 my-3 content-card">
            <div className='text-start fw-lighter'>
                <a href={permalink} className='mx-2'>
                    <span id="subredditicon"></span>
                    <span id="subredditname"> {subreddit} </span>
                </a>
                •
                <span id="postedbyuser" className='mx-2'>
                    Posted By <a href={'https://reddit.com/user/'+user}>u/{user}</a>
                </span>
            </div>
            <div className='fs-4 lh-1 mx-2 my-2 text-start'>
                {title}
            </div>
            <div>
                {
                    isRedditMedia && embed
                }
            </div>
            {/* <div className='d-flex'>
                <button type='button' className='btn btn-primary mx-4'>up</button>
                <button type='button' className='btn btn-primary mx-4'>down</button>
            </div> */}
        </div>
    )
}

export default Card;
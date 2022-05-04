import React, { useState, useEffect } from 'react';
import PostModal from './postModal';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';

function Card(data) {
    const [isRedditMedia, setIsRedditMedia] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [mediaUrl, setMediaUrl] = useState("");
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [subreddit, setSubreddit] = useState("");
    const [show, setShow] = useState(false);
    const [selfText, setSelfText] = useState("");

    let embed = <div></div>

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (isRedditMedia) {
        if (isVideo) {
            embed = 
                <div className='d-flex justify-content-center'>
                    <ReactPlayer url={mediaUrl} controls={true} width='100%' height='100%'></ReactPlayer>
                </div>
        }
        else {
            embed =
                <div>
                    <img className="img-fluid" src={mediaUrl} alt=""></img>
                </div>
        }
    }

    useEffect(() => {
        setTitle(data.data.title);
        setSubreddit(data.data.subreddit_name_prefixed);
        setIsRedditMedia(data.data.is_reddit_media_domain);
        setIsVideo(data.data.is_video);
        setUser(data.data.author);
        setSelfText(data.data.selftext);
        if (data.data.is_video) {
            setMediaUrl(data.data.secure_media.reddit_video.hls_url);
        }
        else {
            setMediaUrl(data.data.url);
        }
    }, [data.data]);

    let packagedData = {
        title: title,
        subReddit: subreddit,
        user: user,
        embed: embed,
        selfText: selfText,
        isRedditMedia: isRedditMedia,
    }

    return (
        <div className="border py-3 my-3 content-card">
            <div className='text-start fw-lighter'>
                <Link to={"/"+subreddit} className="mx-2">
                    <span id="subredditicon"></span>
                    <span id="subredditname"> {subreddit} </span>
                </Link>
                •
                <span id="postedbyuser" className='mx-2'>
                    Posted By <a href={'https://reddit.com/user/'+user}>u/{user}</a>
                </span>
            </div>
            <div onClick={handleShow}>
                <div className='fs-3 lh-1 mx-2 my-2 text-start'>
                    {title}
                </div>
                <div className='fs-6 lh-1 mx-2 text-start'>
                    <span>
                        {selfText}
                    </span>
                </div>
                <div>
                    {
                        isRedditMedia && embed
                    }
                </div>
            </div>
            {/* <div className='d-flex'>
                <button type='button' className='btn btn-primary mx-4'>up</button>
                <button type='button' className='btn btn-primary mx-4'>down</button>
            </div> */}
            <PostModal show={show} handleClose={handleClose} data={packagedData}></PostModal>
        </div>
    )
}

export default Card;
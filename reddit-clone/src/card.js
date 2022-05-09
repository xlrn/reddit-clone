import React, { useState, useEffect } from 'react';
import PostModal from './postModal';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import RedeemIcon from '@mui/icons-material/Redeem';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

function Card(data) {
    const [isRedditMedia, setIsRedditMedia] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [mediaUrl, setMediaUrl] = useState("");
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [subreddit, setSubreddit] = useState("");
    const [show, setShow] = useState(false);
    const [selfText, setSelfText] = useState("");
    const [score, setScore] = useState(0);
    const [comments, setComments] = useState(0);

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
        setUser(data.data.author);
        setSelfText(data.data.selftext);
        setScore(data.data.score >= 1000 ? Math.round((data.data.score/1000) * 10) / 10 + 'k' : data.data.score);
        setComments(data.data.num_comments);
        if (data.data.is_video) {
            setIsVideo(data.data.is_video);
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
        <div className="border rounded pt-3 pb-1 mt-3 content-card">
            <div className='text-start fw-lighter'>
                <Link to={"/"+subreddit} className="mx-2">
                    <span id="subredditicon"></span>
                    <span id="subredditname"> {subreddit} </span>
                </Link>
                •
                <span id="postedbyuser" className='mx-2'>
                    {`Posted By `}
                    {
                        user ? <a href={'https://reddit.com/user/'+user}>u/{user}</a> : "u/deleted"
                    }
                </span>
            </div>
            <div className="cardbody" onClick={handleShow}>
                <div className='fs-3 lh-1 mx-2 my-2 text-start'>
                    {
                        title ? title : "[deleted]"
                    }
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
            <div className='d-flex border-top justify-content-between'>
                <div className='mt-1 ms-4 me-1 text-muted'>
                    <ArrowUpwardIcon></ArrowUpwardIcon>
                    {score}
                    <ArrowDownwardIcon></ArrowDownwardIcon>
                </div>
                <div className='mt-1 mx-1 text-muted'>
                    <ModeCommentIcon className='me-1'></ModeCommentIcon>
                    {comments}
                </div>
                <div className='mt-1 mx-1 text-muted'>
                    <RedeemIcon className='me-1'></RedeemIcon>
                    Give Award
                </div>
                <div className='mt-1 mx-1 text-muted'>
                    <ShareIcon className='me-1'></ShareIcon>
                    Share
                </div>
                <div className='mt-1 ms-1 me-4 text-muted'>
                    <BookmarkAddIcon className='me-1'></BookmarkAddIcon>
                    Add
                </div>
            </div>
            <PostModal show={show} handleClose={handleClose} data={packagedData}></PostModal>
        </div>
    )
}

export default Card;
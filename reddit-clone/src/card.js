import React, { useState, useEffect } from 'react';

function Card(data) {
    let subreddit = data.data.subreddit_name_prefixed;
    let user = data.data.author;
    let title = data.data.title;
    let url = data.data.url;

    const [isRedditMedia, setIsRedditMedia] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [mediaUrl, setMediaUrl] = useState("");

    let embed = <div></div>

    if (isRedditMedia) {
        if (isVideo) {
            embed = 
                <div className='ratio ratio-1x1'>
                    <iframe src={mediaUrl} controls></iframe>
                </div>
        }
        else {
            embed =
                <div>
                    <img className="img-fluid" src={mediaUrl}></img>
                </div>
        }
    }

    useEffect(() => {
        setIsRedditMedia(data.data.is_reddit_media_domain);
        setIsVideo(data.data.is_video);
        if (isVideo) {
            setMediaUrl(data.data.media.reddit_video.fallback_url);
        }
        else {
            setMediaUrl(data.data.url);
        }
    }, [setIsRedditMedia, setIsVideo, setMediaUrl])

    return (
        <div className="border py-3">
            <div>
                <div id="subredditlink">
                    <div id="subredditicon"></div>
                    <div id="subredditname">{subreddit}</div>
                </div>
                <div id="postedbyuser">
                    {user}
                </div>
            </div>
            <div>
                {title}
            </div>

            <div>
                {
                    isRedditMedia && embed
                }
            </div>
        </div>
    )
}

export default Card;
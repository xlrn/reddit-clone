import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function PostModal (props) {
    return(
        <>
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <div>
                        <div className='text-start fw-lighter'>
                            <Link to={"/"+props.data.subReddit} className="mx-2">
                                <span> {props.data.subReddit} </span>
                            </Link>
                            •
                            <span id="postedbyuser" className='mx-2'>
                                Posted By <a href={'https://reddit.com/user/'+props.data.user}>u/{props.data.user}</a>
                            </span>
                        </div>
                        <Modal.Title>{props.data.title}</Modal.Title>
                    </div>
                </Modal.Header>
                { (props.data.selfText || props.data.isRedditMedia) &&
                <Modal.Body>
                <div className="lh-1">
                    {props.data.selfText}
                </div>
                <div className="d-flex justify-content-center">
                    {props.data.embed}
                </div>
                </Modal.Body>
                }
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleClose}>
                        Upvote
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Downvote
                    </Button>
                </Modal.Footer>            
            </Modal>
        </>
    )
}

export default PostModal;
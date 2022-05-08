import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';

function PostBar() {
    return (
        <div className="border rounded py-2 mt-3 d-flex">
            <div className="rounded-circle bg-info text-center fs-4 mx-2" style={{width: "40px", height: "40px"}}>
                u/
            </div>
            <form className='flex-grow-1'>
                <div className="input-group">
                    <input className="form-control py-2 mr-1 bg-transparent rounded-pill" type="search" placeholder="Create a post" />
                    <button className='btn'>
                        <ImageIcon/>
                    </button>
                    <button className='btn'>
                        <LinkIcon/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostBar
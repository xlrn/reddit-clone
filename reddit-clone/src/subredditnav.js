import { NavLink } from "react-router-dom";

function SubRedditNav (data) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link text-dark" to={"/"+data.data.display_name_prefixed}>
                <div className="d-flex">
                    <span className="me-4 d-inline-block">
                        {
                            data.data.icon_img ? 
                            <img className="rounded-circle" style={{width: "20px", height: "20px"}} src={data.data.icon_img} alt={data.data.display_name_prefixed}></img> :
                                <div className="rounded-circle bg-info text-center mt-1" style={{width: "20px", height: "20px", fontSize: "12px"}}>
                                    r/
                                </div>
                        }   
                    </span>
                    {data.data.display_name_prefixed}
                </div>
            </NavLink>
        </li>
    )
}

export default SubRedditNav;
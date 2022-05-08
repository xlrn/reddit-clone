import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BarChartIcon from '@mui/icons-material/BarChart';


function NavMenu() {
    return (
        <div className="d-flex flex-column my-4">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/home">
                        <div className="d-flex">
                            <span className="me-4">
                                <HomeIcon/>
                            </span>
                            Home 
                        </div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/popular">
                        <div className="d-flex">
                            <span className="me-4">
                                <ArrowUpwardIcon/>
                            </span>
                            Popular 
                        </div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/all">
                        <div className="d-flex">
                            <span className="me-4">
                                <BarChartIcon/>
                            </span>
                            All 
                        </div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/r/pan">
                        <div className="d-flex">
                            <span className="me-4 d-inline-block">
                                <img className="img-fluid" style={{width: "20px", height: "20px"}} src="https://styles.redditmedia.com/t5_2set6/styles/communityIcon_qv11mzce3ac31.png?width=256&s=38915d8039f22ec7372952754a20e5e336d2811c" alt="RPAN"></img>
                            </span>
                            RPAN 
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;
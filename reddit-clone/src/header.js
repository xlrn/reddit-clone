import { Link } from "react-router-dom";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='col-4 d-flex'>
          <a className='navbar-brand mx-5' href='/'>
            <img src="../icons/reddit-logo-2436.png" alt="" width="32px" height="32px"></img>
          </a>
          <form className="d-flex ms-4">
            <div className="input-group">
                <span className="input-group-text">
                  <SearchIcon/>
                </span>
                <input className="form-control py-2 pr-5 mr-1 bg-transparent" type="search" placeholder="Search Reddit" id="example-search-input1"/>
            </div>
          </form>
        </div>
        <div className='col-4'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between">
            <li className="nav-item">
              <Link className="nav-link" to="/hot">
                <LocalFireDepartmentIcon fontSize="small"/>
                Hot
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">
                <NewReleasesIcon fontSize="small"/>
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top">
                <TrendingUpIcon fontSize="small"/>
                Top
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;
  
import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='col-4 d-flex'>
          <a className='navbar-brand mx-2' href='#'>Reddit</a>
          <form className="d-flex">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className='col-4 d-flex justify-content-between'>
          <Link to="/hot">
            <button type='button' className='btn btn-primary'>Hot</button>
          </Link>
          <button type='button' className='btn btn-primary'>New</button>
          <button type='button' className='btn btn-primary'>Top</button>
        </div>
      </nav>
    )
}

export default Header;
  
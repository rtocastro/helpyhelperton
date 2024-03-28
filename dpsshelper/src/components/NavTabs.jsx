import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav nav-tabs ">
      <div className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Entry
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/CalFresh"
          className={currentPage === '/CalFresh' ? 'nav-link active' : 'nav-link'}
        >
          Cal Fresh
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/CalWorks"
          className={currentPage === '/CalWorks' ? 'nav-link active' : 'nav-link'}
        >
          Cal Works
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/GeneralRelief"
          className={currentPage === '/GeneralRelief' ? 'nav-link active' : 'nav-link'}
        >
          General Relief
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/Medical"
          className={currentPage === '/Medical' ? 'nav-link active' : 'nav-link'}
        >
          Medical
        </Link>
      </div>
    </div>
  );
}

export default NavTabs;

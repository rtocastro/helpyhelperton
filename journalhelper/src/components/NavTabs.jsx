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
          to="/HelperMaker"
          className={currentPage === '/Helper' ? 'nav-link active' : 'nav-link'}
        >
          Helper
        </Link>
        <div className="nav-item">

          <Link
            to="/AskAI"
            className={currentPage === '/AskAI' ? 'nav-link active' : 'nav-link'}
          >
            Ask AI
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;

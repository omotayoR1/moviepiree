import Movielogo from './moviepirelogo.svg';
import {Link} from 'react-router-dom';
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo">
                <img src={Movielogo} alt="Moviepire"/>
            </div>
            <div className="links">
                <Link to="/">Top250Movies</Link>
                <Link to="/Top250tvs">Top250Tvs</Link>
                <Link to="/Mpm">Most Popular Movies</Link>
                <Link to="/Intheater">In Theather</Link>
                <Link to="/Comingsoon">Coming Soon</Link>
                <Link to="/Boxoffice">Box office</Link>
                <Link to="/Boxalltime">Box Office All time</Link>
            </div>
        </div>
     );
}
 
export default Sidebar;
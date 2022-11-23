import React from 'react-dom';
import {Link} from 'react-router-dom'
function Layout(){
    return(
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>

            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/service'>Service</Link>
            </li>
        </ul>
    )
}
export default Layout;
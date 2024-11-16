import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
           
            <ul className='nav-links' >
            
                <li><Link to ="./">Product</Link></li>
                <li><Link to ="./Add"> Add Product</Link></li>
                <li><Link to ="./update"> Update Product</Link></li>
                <li><Link to ="./logout"> Logout Product</Link></li>
                <li><Link to ="./profile">Profile</Link></li>


            </ul>
        </div>
    );
};

export default Nav;
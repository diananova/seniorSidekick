import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, lightBlue } from '@material-ui/core/colors';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" style={{ color: pink[200] }} />
            </IconButton>
            <div class="title">
            {/* <img className="header__logo" src="https://cdn2.vectorstock.com/i/1000x1000/52/21/charity-helping-hands-with-red-heart-vector-27945221.jpg" alt="our logo"/> */}
            <h1>
                Senior x Sidekick
            </h1>
            </div>
            <IconButton>
            <ForumIcon fontSize="large" style={{ color: pink[200] }}/>
            </IconButton> 
        </div>
    )
}

export default Header
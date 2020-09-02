import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, lightBlue } from '@material-ui/core/colors';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:focus, &:hover, &:visited, &:link, &:active {
text-decoration: none;
}
`;

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon className="header__icon" fontSize="large" style={{ color: pink[200] }} />
                </IconButton>
            ) : (
            <IconButton>
            <PersonIcon fontSize="large" style={{ color: pink[200] }} />
            </IconButton>
            )
        }
            <StyledLink to="/">
            <div class="title">
            {/* <img className="header__logo" src="https://cdn2.vectorstock.com/i/1000x1000/52/21/charity-helping-hands-with-red-heart-vector-27945221.jpg" alt="our logo"/> */}
            <h1 style={{ cursor: "pointer", textDecoration: 'none'}}>
                Senior x Sidekick
            </h1>
            </div>
            </StyledLink>
            <StyledLink to="/chat">
            <IconButton>
            <ForumIcon fontSize="large" style={{ color: pink[200] }}/>
            </IconButton>
            </StyledLink>
        </div>
    )
}

export default Header
import React from 'react';
import './content.css';
import logo from './content-image.jpg';
//import diana from './Diana.png';
//import prajna from './prajna.jpg';
//import lita from './Lita.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const theme = createMuiTheme({ typography: { fontFamily: [ 'Permanent Marker' ]}});

function Content() {
    return(
        <div class="content">
            <div className="content__logo">
                <img src={logo} />
            </div>
            <div class="buttons">
            <div class="individual-button">
            <Link href="/questionnaire"><Button variant="contained" style={{ backgroundColor: blue[200], borderRadius: '15px', padding: '20px 20px', fontSize: '36px', fontFamily: 'Permanent Marker' }}>
                I'm a Senior!
            </Button></Link>
            <div class="button-content">
                <h3>
                You’re a senior and you need help grocery shopping, dog walking, cat sitting, , or you want to talk and  share ideas with a sidekick!
                </h3>
            </div>
            </div>
            <div class="individual-button">
            <Link href="/login"><Button variant="contained"  style={{ backgroundColor: blue[200], borderRadius: '15px', padding: '20px 20px', fontSize: '36px', fontFamily: 'Permanent Marker' }}>
                I'm a Sidekick!
            </Button></Link>
            <div class="button-content">
                <h3>
                I’m a sidekick! I want to help seniors run their errands or just have a nice conversation and gain new perspectives!
                </h3>
            </div>
            </div>
            </div>
            <div class="how">
                <p class="how-it-works">About Us</p>
                <div class="about-us">
                    <p>
                    The COVID 19 pandemic has affected different demographics disproportionately. The elderly who are already immuno comporomised are significantly more vulnerable to the virus.
                    </p>
                    <p>
                    This impacts them a lot more than the youth. SeniorSideKick solves this by connecting the youth to the elders, by helping them get groceries, walking their dogs, or giving them a ride!
                    </p>
                    <p>
                    we hope that by connecting available proactive young adults to help out with the seniors in their community can foster an environment where the elerly won’t be isolated from the community and can form and maintain relationships with the younger generations.
                    </p>
                    <p>
                    “ “ -  something about passing experinece and wisdom/knowlege to the future generation.
                    </p>
                </div>
                <div class="our-images">
                        <img src="https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg" />
                        <img src="https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg" />
                        <img src="https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg" />
                        <img src="https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg" />
                    </div>
            </div>
        </div>
    )
}

export default Content
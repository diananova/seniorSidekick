import React from 'react';
import './Content.css';
import logo from './content-image.jpg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({ typography: { fontFamily: [ 'Permanent Marker' ]}});

function Content() {
    return(
        <div class="content">
            <div className="content__logo">
                <img src={logo} />
            </div>
            <div class="buttons">
            <div class="individual-button">
            <Button variant="contained" onClick={() => { alert('clicked') }} style={{ backgroundColor: blue[200], borderRadius: '15px', padding: '20px 20px', fontSize: '36px', fontFamily: 'Permanent Marker' }}>
                I'm a Senior!
            </Button>
            <div class="button-content">
                <h3>
                You’re a senior and you need help grocery shopping, dog walking, cat sitting, , or you want to talk and  share ideas with a sidekick!
                </h3>
            </div>
            </div>
            <div class="individual-button">
            <Button variant="contained" onClick={() => { alert('clicked') }} style={{ backgroundColor: blue[200], borderRadius: '15px', padding: '20px 20px', fontSize: '36px', fontFamily: 'Permanent Marker' }}>
                I'm a Sidekick!
            </Button>
            <div class="button-content">
                <h3>
                I’m a sidekick! I want to help seniors run their errands or just have a nice conversation and gain new perspectives!
                </h3>
            </div>
            </div>
            </div>
            <div class="how">
                <p class="how-it-works">How it works</p>
                <div class="about-how">
                    <div>
                    <p>
                    young adults 18 years and above who wants to help out the elders in their community or their city, can sign up with their contact information, location, and list the things they can help with and become a sidekick!
                    </p>
                    </div>
                    <div>
                    <p>
                    whether that be grocery shopping, picking up medications, simply a nice stroll around the park or reading in the kitchen! These listings will be shown on a map for seniors to view. 
                    </p>
                    </div>
                    <div>
                    <p>
                    when a senior signs up looking for help with a particular activity, they will input their contact information and what they need help with. They will then see a listing of available volunteers to help them on a map.
                    </p>
                    </div>
                    <div>
                    <p>
                    They can select a sidekick and click the “request help” button. The sidekick will be notified to respond to the request. If they accept the request, both their respective contact information will be shared.
                    </p>
                    </div>
                    <div>
                    <p>
                    if the sidekick is unavailable, they can choose “unavailable” and their information won’t be shared. The senior’s request then can go to other sidekickes available on the map!
                    </p>
                    </div>
                    <div>
                    <p>
                    #covid19Relief!
                    </p>
                    </div>
                </div>
            </div>

            <div class="how">
                <p class="how-it-works">About Us</p>
                <div class="about-us">
                    <p>
                    - in light of the pandemic, we see a problem - the elderly being isolated, and having difficulties to perform daily tasks and activities.
                    </p>
                    <p>
                    - this is actually an ongoing problem before the pandemic but was highlighted when covid 19 hit
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
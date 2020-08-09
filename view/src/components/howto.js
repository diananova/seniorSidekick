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
            <div class="how">
                <p class="how-it-works">How it works</p>
                <div class="about-how">
                    <div>
                    <p>
                    1. young adults 18 years and above who wants to help out the elders in their community or their city, can sign up with their contact information, location, and list the things they can help with and become a sidekick!
                    </p>
                    </div>
                    <div>
                    <p>
                    2. whether that be grocery shopping, picking up medications, simply a nice stroll around the park or reading in the kitchen! These listings will be shown on a map for seniors to view. 
                    </p>
                    </div>
                    <div>
                    <p>
                    3. when a senior signs up looking for help with a particular activity, they will input their contact information and what they need help with. They will then see a listing of available volunteers to help them on a map.
                    </p>
                    </div>
                    <div>
                    <p>
                    4. They can select a sidekick and click the “request help” button. The sidekick will be notified to respond to the request. If they accept the request, both their respective contact information will be shared.
                    </p>
                    </div>
                    <div>
                    <p>
                    5. if the sidekick is unavailable, they can choose “unavailable” and their information won’t be shared. The senior’s request then can go to other sidekickes available on the map!
                    </p>
                    </div>
                    <div>
                    <p>
                    #COVID19 In light of the pandemic, we thought this would serve as a form of assistance for isolated elderly people, and hope that it could function to connect the gap between the old and young continuing forward as well.  
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
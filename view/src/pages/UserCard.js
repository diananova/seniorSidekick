import React, { useState } from 'react';
import './UserCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red, green, yellow, lightBlue } from '@material-ui/core/colors';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '65%',
      marginBottom: '2%',
      marginLeft: '2%'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    margin: {
        margin: theme.spacing(1),
      },
  }));

function UserCard() {
    const [people, setPeople] = useState([
        {
            name: 'random',
            profilePic: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            phone: 'xxxxxx',
            bio: 'some random bio',
            availability: green[500]
        },
        {
            name: 'prahitha',
            profilePic: '',
            phone: 'xxxxxx',
            bio: 'some random bio',
            availability: yellow[700]
        },
        {
            name: 'diana',
            profilePic: '',
            phone: 'xxxxxx',
            bio: 'some random bio',
            availability: green[500]
        },
        {
            name: 'lita',
            profilePic: '',
            phone: 'xxxxxx',
            bio: 'some random bio',
            availability: yellow[700]
        },
        {
            name: 'prajna',
            profilePic: '',
            phone: 'xxxxxx',
            bio: 'some random bio',
            availability: green[500]
        }
    ]);

    const classes = useStyles();

    return (
        <div>
            {people.map(person => (
                <Card className={classes.root}
                key={person.name}
                >
                <CardHeader
                  avatar={
                    <Avatar aria-label="volunteer" className={classes.avatar} src={person.profilePic} />
                  }
                  action={
                    <IconButton aria-label="connect on call">
                    <PhoneEnabledIcon />
                  </IconButton>
                  }
                  title={person.name}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {person.bio}
                  </Typography>
                  <div class="info">
                    <div class="availability">
                    <div className="align">
                    <Typography variant="body2" color="textSecondary" component="p">
                    Availability
                    </Typography>
                    </div>
                    <IconButton aria-label="add to favorites">
                    <FiberManualRecordIcon style={{ color: person.availability, fontSize: '15px' }}/>
                    </IconButton>
                    </div>
                    <div class="leftAlign">
                    <Button className={classes.margin} variant="contained" size="small" onClick={() => { alert('clicked') }} style={{ backgroundColor: lightBlue[600], color: lightBlue[50], fontSize: '12px' }}>
                        Learn more
                    </Button>
                    </div>
                    </div>
                </CardContent>
              </Card>
            ))}
        </div>
    )
}

export default UserCard;
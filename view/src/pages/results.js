
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import axios from 'axios';
import _ from 'lodash';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


class results extends Component {
	constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }
  
  componentDidMount(){
    axios
      .get('/users')
      .then((response)=> {
          this.setState({
            array: response.data
          });
    })
  }

  
  render() {
    return(
      <div>
        <Header></Header>
        <h>RESULTS</h>
        <Typography style={{fontFamily:'Permanent Marker'}} variant="h5" align="center" color="textSecondary" paragraph>
              Choose your sidekick!
            </Typography>
        <ul className="list-group">
           {this.renderVolunteers()}
        </ul>
      </div>
    );
  }
 
  renderVolunteers() {
    let arr = this.state.array;
    var search = this.props.location.state.searchFilters
    let filteredOptions = arr.filter(
      o => ((search.country==null ||  o.country === search.country) && 
      (search.city==null ||  o.city === search.city) &&
      (search.category==null ||  o.category === search.category))
    );
    
    
    
    if (filteredOptions==null || filteredOptions.length<=0)
      return (
        <div>Sorry! No one offers that service in your area</div>
      )
    return _.map(filteredOptions, user => {
      return (
        <div>
          <Card style={{ marginLeft:'15%', width: '70%', marginBottom: '20px', marginTop: '10px'}}>
          <CardMedia
                    image="../images/girl1.jpg"
                    title="Image title"
                  />
          <Typography style={{fontFamily:'Arial'}}>{user.firstName} {user.lastName} </Typography>
          <Typography style={{fontFamily:'Arial', paddingTop: '5px'}}>Country: {user.country}</Typography>
          <Typography style={{fontFamily:'Arial', paddingTop: '5px'}}>{user.bio}</Typography>
          <Typography style={{fontFamily:'Arial', paddingTop: '5px'}}>{user.category}</Typography>
          <Typography style={{fontFamily:'Arial', paddingTop: '5px'}}>Phone number: {user.phoneNumber}</Typography>
          </Card>
        </div>
      );
    });
  }
 
}

export default results;


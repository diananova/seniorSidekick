
import React, { Component } from 'react';
import Header from '../components/header';
import axios from 'axios';
import _ from 'lodash';



class results extends Component {
	constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }componentDidMount(){
    axios
      .get('/users')
      .then((response)=> {
          this.setState({
            array: response.data
          });
    })
  }
  render() {
    console.log(this.state.array);
    return(
      <div>
        <h3>Volunteers</h3>
        <ul className="list-group">
           {this.renderVolunteers()}
        </ul>
      </div>
    );
  }
 
  renderVolunteers() {
    console.log(this.state.array);
    return _.map(this.state.array, user => {
      return (
        <div>
          <p>{user.firstName} {user.lastName} </p>
        </div>
      );
    });
  }
 
}

export default results;
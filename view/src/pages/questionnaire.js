import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Header from '../components/Header';
import Footer from '../components/footer';


class Questionnaire extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (sender) => {
        this.setState({
            isCompleted: true
        })
        this.props.history.push({
            pathname: '/results',
            state: { searchFilters:sender.data }
        
        })
        console.log(sender.data);
}


    render(){
        var surveyJSON = {"pages":[
            {"name":"page1","elements":[
                {"type":"dropdown","name":"country","title":"Select the country...","choicesByUrl":{"url":"https://restcountries.eu/rest/v2/all","valueName":"name"}},
                {"type":"text","name":"city","title":"Insert the city..."},
                {"type":"dropdown","name":"category","title":"What do you need help with?","choices":["groceries","Ride","Doctor's Appointment","Emergency","Walk my dog"]}]}]};
         
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey 
            json={surveyJSON}
            showCompletedPage={false}
            onComplete={this.onCompleteComponent}
            />
        ) : null;



      
        return (
            <div>
               <Header></Header>
                {surveyRender}
            </div>
        )
    }
}

export default Questionnaire
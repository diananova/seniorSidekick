import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Header from '../components/header';


class Questionnaire extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = () => {
        this.setState({
            isCompleted: true
        })
}

    render(){
        var surveyJSON = {"pages":[
            {"name":"page1","elements":[
                {"type":"dropdown","name":"country","title":"Select the country...","isRequired":true,"choicesByUrl":{"url":"https://restcountries.eu/rest/v2/all","valueName":"name"}},
                {"type":"text","name":"city","title":"Insert the city...","isRequired":true,},
                {"type":"checkbox","name":"services","choices":["shopping","entertaining","rides"]}]}]};
         
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey 
            json={surveyJSON}
            showCompletedPage={false}
            onComplete={this.onCompleteComponent}
            />
        ) : null;

        var onSurveyCompletion = this.state.isCompleted ? (
          this.props.history.push('/results')
        ) : null;
        return (
            <div>
               <Header></Header>
                {surveyRender}
                {onSurveyCompletion}
            </div>
        )
    }
}

export default Questionnaire
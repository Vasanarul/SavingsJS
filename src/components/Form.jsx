import React from 'react';
import axios from 'axios';
import SignUp from '../styles/signup.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name : '',
      goal : null,
      current : null,
      date : 'yyyy-mm-dd'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleGoal = this.handleGoal.bind(this);
    this.handleCurrent = this.handleCurrent.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  handleSubmit(event) {
    alert(`${this.state.name}  ${this.state.goal}  ${this.state.current}  ${this.state.date}`);
    axios.post('/api/users', {
      name: this.state.name,
      goal: this.state.goal,
      current: this.state.current,
      date: this.state.date
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleName(event) {
    this.setState({
      name : event.target.value
    })
  }

  handleGoal(event) {
    this.setState({
      goal : event.target.value
    })
  }

  handleCurrent(event) {
    this.setState({
      current : event.target.value
    })
  }

  handleTime(event) {
    this.setState({
      date : event.target.value
    })
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SignUp>New to SavingsJS?
        <br></br>
        <br></br>
        <label>
          Name:
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleName}/>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <label>
          Goal:
          <br></br>
          <input type="number" value={this.state.value} onChange={this.handleGoal}/>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <label>
          Current:
          <br></br>
          <input type="number" value={this.state.value} onChange={this.handleCurrent}/>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <label>
          Goal Date:
          <br></br>
          <input type="date" value={this.state.value} onChange={this.handleTime}/>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
        </SignUp>
      </form>
    )
  }
}

export default Form;
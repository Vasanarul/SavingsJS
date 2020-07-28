import React from 'react';
import Update from './Update.jsx';
import moment from 'moment';

class Userlist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clickedState: false,
      selectedName: null,
      date: null,
      current: null,
      remaining: null
    }

    this.showRemaining = this.showRemaining.bind(this);
  }

  showRemaining(user) {
    this.setState({
      clickedState: true,
      selectedName: user.name,
      date: moment(user.date).format('MMMM Do YYYY'),
      current: user.current,
      remaining: (user.goal - user.current)
    })
  }

  render() {
    if (this.state.clickedState) {
      return (
        <div>
          <h3 type="text" >{this.state.selectedName} has ${this.state.remaining} remaining to save before {this.state.date}!</h3>
          <ul>
            {this.props.users.map((user, index) => (
              <li onClick={() => this.showRemaining(user)} key={index}>{user.name}</li>
            ))}
          </ul>
          <br></br>
          <Update user={this.state.selectedName} current={this.state.current}/>
        </div>
      )
    }
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (
            <li onClick={() => this.showRemaining(user)} key={index}>{user.name}</li>
          ))}
        </ul>
        <br></br>
        <Update user={this.state.selectedName} current={this.state.current}/>
      </div>
    )
  }
}

export default Userlist;
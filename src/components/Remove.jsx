import React from 'react';
import axios from 'axios';

class Remove extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name : ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.trackUser = this.trackUser.bind(this);
  }

  removeUser() {
    axios.delete('/api/users', {
        name: this.state.name
    })
    .then(result => {
      console.log(result)
    })
  }

  trackUser(event) {
    this.setState({
      name : event.target.value
    });
    console.log(this.state.name)
  }

  handleSubmit(event) {
    this.removeUser()
    event.preventDefault()
    console.log(this.state.name)
  }


  render() {
    return (
      <div>
        We're sorry to see you go! Enter your name here to delete your info:
        <form onSubmit={this.handleSubmit}>
          <label>
          <br></br>
            Name:
            <input type="text" value={this.state.value} onChange={this.trackUser}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Remove;
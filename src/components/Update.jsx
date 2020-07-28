import React from 'react';
import axios from 'axios';

class Update extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      new : null
    }

    this.handleNew = this.handleNew.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser() {
    axios.patch('/api/users', {
      name: this.props.user,
      current: this.props.current,
      new: this.state.new
    })
    .then(result => {
      console.log(this.props.user);
      console.log(result)
    })
  }

  handleSubmit() {
    this.updateUser()
  }

  handleNew(event) {
    this.setState({
      new: event.target.value
    })
  }


  render() {
    return (
      <div>
        {this.props.user} have you made more money? Click this button:
        <form onSubmit={this.handleSubmit}>
          <label>
            The spoils:
            <input type="number" value={this.state.value} onChange={this.handleNew}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Update;
import React from 'react';

class Userlist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clickedState: false,
      selectedName: null,
      date: null,
      remaining: null
    }

    this.showRemaining = this.showRemaining.bind(this);
  }

  showRemaining(user) {
    this.setState({
      clickedState: true,
      selectedName: user.name,
      date: user.date,
      remaining: (user.goal - user.current)
    })
  }

  render() {
    if (this.state.clickedState) {
      return (
        <div>
          <h3 type="text" >{this.state.selectedName} has {this.state.remaining} remaining to save by {this.state.date}!</h3>
          <ul>
            {this.props.users.map((user, index) => (
              <li onClick={() => this.showRemaining(user)} key={index}>{user.name}</li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <ul>
        {this.props.users.map((user, index) => (
          <li onClick={() => this.showRemaining(user)} key={index}>{user.name}</li>
        ))}
      </ul>
    )
  }
}

export default Userlist;
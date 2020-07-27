import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
  }

  componentDidRender() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/users')
    .then(data => console.log(data))
  }

  render() {
    this.getUser()
    return (
        <div>Financing is life</div>
      )
  }
}

export default App;
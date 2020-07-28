import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      error: null,
      info : []
    }

    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    console.log('mounted component')
    this.getUser()
  }

  getUser() {
    axios.get('/api/users')
    .then (
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          info: result.data
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const {error, isLoaded, info} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (<div>
      <div>{this.state.info[0].name}</div>
      <br></br>
      <br></br>
      <div><Form /></div>
    </div>
      )
    }
  }
}

export default App;
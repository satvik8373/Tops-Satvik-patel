import React, { Component } from 'react'

class DataFetcherClass extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [], loading: true }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data.slice(0, 5), loading: false }))
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        {this.state.loading ? <p>Loading...</p> : (
          <ul>
            {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
        )}
      </div>
    )
  }
}

export default DataFetcherClass

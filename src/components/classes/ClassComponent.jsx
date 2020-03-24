import React, { Component } from 'react';
import API from "../../@utils/API";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      fetchResults: [],
    };
  }

  async componentDidMount() {
    let fetchResults = await API.get('/');

    console.log(fetchResults.data);

    fetchResults = fetchResults.data;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        fetchResults: fetchResults
      }
    });
  }

  render() {
    const { isLoading, fetchResults } = this.state;

    const loadingMessage = <span>Loading...</span>

    const data = fetchResults.map((item) => {
      return <li key={item.id}>{item.name}</li>
    });

    return (
      <div>
        <h1>This is rendered with a React Class Component</h1>
        <ul>{isLoading ? loadingMessage : data}</ul>
      </div>
    );
  }
}

export default ClassComponent

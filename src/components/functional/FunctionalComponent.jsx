import React, { useState, useEffect } from 'react';
import API from "../../@utils/API";

const FunctionalComponent = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await API.get('/');
      setResult(fetchResult.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const loadingMessage = () => {
    return <span>Loading...</span>
  }

  const data = () => {
    return result.map(item => (
      <li key={item.id}>{item.name}</li>
    ))
  }

  return (
    <div>
      <h1>This is rendered with a React Functional Component</h1>
      <ul>{isLoading ? loadingMessage() : data()}</ul>
    </div>
  )
}

export default FunctionalComponent;

import React from 'react';

import PostList from './components/PostList/PostList';
import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
      const { data: { data } } = await axios.get(url);
      setData(data);
    }
    fetchData();
  }, [])

  return <div>
    <PostList data={data} />
  </div>
}

export default App;
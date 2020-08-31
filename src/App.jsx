import React from 'react';

import PostList from './components/PostList/PostList';
import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [data, setData] = useState([])
  const [listPage, setListPage] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50
  });

  const { _page } = listPage;
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=${_page}`
      const { data: { data } } = await axios.get(url);
      setData(data);
    }
    fetchData();
  }, [_page])

  const handleChangePage = newPage => {
    setListPage({ ...listPage, _page: newPage });
  }

  return <div>
    <PostList data={data} />
    <Pagination listPage={listPage} handleChangePage={handleChangePage} />
  </div>
}

export default App;
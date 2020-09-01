import React from 'react';

import PostList from './components/PostList/PostList';
import { useState } from 'react';

import axios from 'axios';
import { useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';
import PostSearch from './components/PostSearch/PostSearch';

function App() {
  const [data, setData] = useState([])
  const [listPage, setListPage] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
    title_like: ''
  });

  const { _page, title_like } = listPage;
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=${_page}&title_like=${title_like}`
      const { data: { data } } = await axios.get(url);
      setData(data);
    }
    fetchData();
  }, [listPage])

  const handleChangePage = newPage => {
    setListPage({ ...listPage, _page: newPage });
  }

  const handleSearch = searchValue => {
    console.log(searchValue)
    setListPage({ ...listPage, title_like: searchValue });
  }

  return <div>
    <PostSearch title_like={title_like} handleSearch={handleSearch} />
    <PostList data={data} />
    <Pagination listPage={listPage} handleChangePage={handleChangePage} />
  </div>
}

export default App;
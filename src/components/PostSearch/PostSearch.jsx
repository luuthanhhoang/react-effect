import React from 'react';

const PostSearch = ({ handleSearch, title_like }) => {

  return (
    <form>
      <input
        value={title_like}
        onChange={e => handleSearch(e.target.value)}
      />
    </form>
  )
};

export default PostSearch;
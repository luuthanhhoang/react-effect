import React from 'react';

const Pagination = ({ listPage: { _page, _limit, _totalRows }, handleChangePage }) => {
  const totalPage = Math.ceil(_totalRows / _limit);

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handleChangePage(_page - 1)}>Prev</button>
      <button disabled={_page === totalPage} onClick={() => handleChangePage(_page + 1)}> Next</button >
    </div >
  )
};

export default Pagination;


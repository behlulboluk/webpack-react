import React from 'react';
import '../style/Pagination.css';

const Pagination = (props) => {
  const{page,totalPages,handlePaginationClick}=props;
  return(
    <div className="Pagination">
      <button className="Pagination-button"
        onClick={()=>handlePaginationClick('prev')}>
        &larr;
      </button>
      <span className="Pagination-info">
        page <b>{page}</b>
      </span>
      <button className="Pagination-button"
        onClick={()=>handlePaginationClick('next')}>
        &rarr;
      </button>
    </div>
  );
}
export default Pagination;

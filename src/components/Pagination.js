import React from 'react'

const Pagination = ({ pagination, listLength, changePage }) => {
  // Get number of pages
  const numberOfPages = Math.ceil(listLength / pagination.itemsPerPage)
  // Get array of pages
  const pages = Array.from(Array(numberOfPages).keys())

  return (
    <div className="mb-4">
      <div className="text-center mb-2">
        Showing {pagination.start + 1} to{' '}
        {pagination.end > listLength ? listLength : pagination.end} of{' '}
        {listLength} pies
      </div>
      <div className="text-center">
        {pagination.currentPage !== 0 && (
          <button
            className="btn pagination-btn"
            onClick={() => changePage(pagination.currentPage - 1)}
          >
            {'<'}
          </button>
        )}
        {pages.map(page => (
          <button
            className={
              pagination.currentPage === page
                ? 'btn pagination-btn pagination-btn-selected'
                : 'btn pagination-btn'
            }
            key={'page' + page}
            onClick={() => changePage(page)}
          >
            {page + 1}
          </button>
        ))}
        {pagination.currentPage + 1 !== numberOfPages && (
          <button
            className="btn pagination-btn"
            onClick={() => changePage(pagination.currentPage + 1)}
          >
            {'>'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
import React from 'react'
import { Icon } from 'react-fa'

const Pagination = ({ pagination, listLength, onChangePage }) => {
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
            onClick={() => onChangePage(pagination.currentPage - 1)}
          >
            <Icon name='angle-left' />
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
            onClick={() => onChangePage(page)}
          >
            {page + 1}
          </button>
        ))}
        {pagination.currentPage + 1 !== numberOfPages && (
          <button
            className="btn pagination-btn"
            onClick={() => onChangePage(pagination.currentPage + 1)}
          >
            <Icon name='angle-right' />
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination

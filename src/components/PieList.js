import React from 'react'
import PieItem from './PieItem'

const PieList = ({ pies, stores, onSearch, onSort }) => (
  <div>
    <div className="filter-form-group pie-list mx-auto d-flex space-between flex-column flex-md-row">
      <div className="filter-form form-group align-items-center mr-md-auto">
        <input
          name="search"
          className="form-control"
          type="text"
          placeholder="Search"
          onChange={onSearch}
        />
      </div>
      <div className="filter-form form-group align-items-center ml-md-auto">
        <select
          name="filter"
          className="custom-select"
          defaultValue="priceAsc"
          onChange={onSort}
        >
          <option value="priceAsc">Price Ascending</option>
          <option value="priceDesc">Price Descending</option>
        </select>
      </div>
    </div>
    <div className="filter-form-group d-flex flex-wrap flex-column flex-md-row mt-4 pie-list mx-auto justify-content-center justify-content-md-start">
      {pies.map((pie, index) => (
        <PieItem key={'PieIndex' + index} pie={pie} stores={stores} />
      ))}
    </div>
  </div>
)

export default PieList

// @flow
import React from 'react'
import PieItem from './PieItem'
import Filters from './Filters'

// $FlowFixMe - Pie List Component
const PieList = ({ pies, stores, onSearch, onSort }) => (
  <div>
    <Filters onSearch={onSearch} onSort={onSort} />
    <div className="filter-form-group d-flex flex-wrap flex-column flex-md-row pie-list mx-auto justify-content-center justify-content-md-start">
      {pies.map((pie, index) => (
        <PieItem key={'PieIndex' + index} pie={pie} stores={stores} />
      ))}
    </div>
  </div>
)

export default PieList

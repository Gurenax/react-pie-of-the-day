import React from 'react'
import PieItem from './PieItem'

const PieList = ({ pies, stores }) => (
  <div className="d-flex flex-wrap mt-4 pie-list mx-auto justify-content-center justify-content-md-start">
    {pies.map((pie, index) => (
      <PieItem key={'PieIndex' + index} pie={pie} stores={stores} />
    ))}
  </div>
)

export default PieList

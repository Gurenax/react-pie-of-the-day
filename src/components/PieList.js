import React from 'react'
import PieItem from './PieItem'

const PieList = ({ pies, stores }) => (
  <div className="d-flex flex-wrap">
    {pies.map(pie => <PieItem key={pie.id} pie={pie} stores={stores} />)}
  </div>
)

export default PieList

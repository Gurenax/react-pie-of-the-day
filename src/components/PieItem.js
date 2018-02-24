// @flow
import React from 'react'
import { Icon } from 'react-fa'
import { getStoreDetails, getStoreFullAddress } from '../api/stores'
import { getQuantityDescription } from '../api/pies'

// $FlowFixMe - Pie Item Component
const PieItem = ({ pie, stores }) => {
  const store = getStoreDetails(stores, pie.storeId)
  let styleRating = {}
  if (store.rating > 7) {
    styleRating = { ...styles.rating, ...styles.ratingHigh }
  } else if (store.rating > 3) {
    styleRating = { ...styles.rating, ...styles.ratingMid }
  } else {
    styleRating = { ...styles.rating, ...styles.ratingLow }
  }

  return (
    <div className="card mr-4 mb-4 pie-card">
      <div
        className="position-absolute text-center raleway"
        style={styleRating}
      >
        {store.rating}
      </div>

      <div className="card-body">
        <h2 className="card-title pie-card-title font-weight-bold raleway">
          {pie.displayName}
        </h2>
        <h6 className="card-subtitle raleway mb-2 text-muted">
          {store.displayName}
        </h6>
        <p className="card-text raleway">
          <span className="pie-card-price">{pie.priceString}</span>{' '}
          <span className="pie-card-description">
            ({getQuantityDescription(pie.quantity)})
          </span>
        </p>
        <div className="card-text raleway pie-card-description">
          <div className="d-flex d-inline">
            <Icon name="map-marker" className="mt-2 mr-2" />
            <div>{getStoreFullAddress(store)}</div>
          </div>
          <Icon name="phone" className="mr-2" />
          {!!store.mobile && store.mobile}
        </div>
      </div>
    </div>
  )
}

const styles = {
  rating: {
    minWidth: '60px',
    maxWidth: '60px',
    minHeight: '60px',
    maxHeight: '60px',
    fontSize: '36px',
    color: '#FFFFFF',
    right: '0px'
  },
  ratingHigh: {
    backgroundColor: '#219653'
  },
  ratingMid: {
    backgroundColor: '#F2C94C'
  },
  ratingLow: {
    backgroundColor: '#F2994A'
  }
}

export default PieItem

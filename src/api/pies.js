// @flow
import api from './init'

// $FlowFixMe - Retrieve list of all pies
export const listPies = async () => {
  try {
    // GET: all pies
    const response = await api.get('/pies')
    return response.data
  } catch (error) {
    throw Error('Pie list is unavailable at this time')
  }
}

// $FlowFixMe - Retrieve list of pies of the day
export const listPiesOfTheDay = async () => {
  try {
    // Fetch all pies
    const allPies = await listPies()
    // Filter pies of the day from list of pies
    const piesOfTheDay = allPies.filter(pie => {
      // Pie should Pie of the Day and has quantity greater than 0
      return pie.isPieOfTheDay === true && pie.quantity > 0
    })
    return piesOfTheDay
  } catch (error) {
    throw Error('Pie list is unavailable at this time')
  }
}

// $FlowFixMe - Get Quantity Description
export const getQuantityDescription = quantity => {
  return quantity > 1 ? `per ${quantity} pieces` : 'per piece'
}

// $FlowFixMe - Pies by Price Ascending
export const sortPiesByPriceAscending = (pies) => {
  return [...pies].sort( (a, b) => {
    return a.price - b.price
  })
}

// $FlowFixMe - Sort Pies by Price Descending
export const sortPiesByPriceDescending = (pies) => {
  return [...pies].sort( (a, b) => {
    return b.price - a.price
  })
}

// $FlowFixMe - Sort Pies
export const sortPies = (pies, sortKey) => {
  switch (sortKey) {
    case 'priceAsc':
      return sortPiesByPriceAscending(pies)
    case 'priceDesc':    
      return sortPiesByPriceDescending(pies)
    default:
      return sortPiesByPriceAscending(pies)
  }
}

// $FlowFixMe - Search Pies
export const searchPies = (pies, searchKey) => {
  return pies.filter(pie => {
    return pie.displayName.toLowerCase().match(searchKey.toLowerCase())
  })
}
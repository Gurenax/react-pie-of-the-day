import api from './init'

// Retrieve list of all pies
export const listPies = async () => {
  try {
    // GET: all pies
    const response = await api.get('/pies')
    return response.data
  } catch (error) {
    throw Error('Pie list is unavailable at this time')
  }
}

// Retrieve list of pies of the day
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

// Get Quantity Description
export const getQuantityDescription = quantity => {
  return quantity > 1 ? `per ${quantity} pieces` : 'per piece'
}

// Sort Pies by Price Ascending
export const sortPiesByPriceAscending = (pies) => {
  return [...pies].sort( (a, b) => {
    return a.price - b.price
  })
}

// Sort Pies by Price Descending
export const sortPiesByPriceDescending = (pies) => {
  return [...pies].sort( (a, b) => {
    return b.price - a.price
  })
}

// Sort Pies
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

// Search Pies
export const searchPies = (pies, searchKey) => {
  return pies.filter(pie => {
    return pie.displayName.toLowerCase().match(searchKey.toLowerCase())
  })
}
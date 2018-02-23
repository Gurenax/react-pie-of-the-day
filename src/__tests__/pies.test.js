import {
  listPies,
  listPiesOfTheDay,
  getQuantityDescription,
  sortPiesByPriceAscending,
  sortPiesByPriceDescending,
  sortPies,
  searchPies
} from '../api/pies'

describe('When retrieving a list of pies', () => {
  test('It should fetch a list of pies', async () => {
    const expected = 0
    let result = null
    try {
      const pies = await listPies()
      result = pies.length
    } catch (error) {
      result = error
    }
    expect(result).toBeGreaterThan(expected)
  })

  test('It should fetch a list of pies of type object', async () => {
    const expected = 'object'
    let result = null
    try {
      const pies = await listPies()
      result = typeof pies
    } catch (error) {
      result = error
    }
    expect(result).toEqual(expected)
  })
})

describe('When retrieving a list of pies of the day', () => {
  test('It should fetch a list of pies of the day', async () => {
    const expected = 0
    let result = null
    try {
      const pies = await listPiesOfTheDay()
      result = pies.length
    } catch (error) {
      result = error
    }
    expect(result).toBeGreaterThan(expected)
  })

  test('It should fetch a list of pies of the day of type object', async () => {
    const expected = 'object'
    let result = null
    try {
      const pies = await listPiesOfTheDay()
      result = typeof pies
    } catch (error) {
      result = error
    }
    expect(result).toEqual(expected)
  })
})

describe('When translating the quantity to its appropriate description', () => {
  test('It should translate 1 quantity to per piece', () => {
    const given = 1
    const expected = 'per piece'
    const result = getQuantityDescription(given)
    expect(result).toEqual(expected)
  })

  test('It should translate more than 1 quantity to per x pieces', () => {
    const given = 2
    const expected = `per ${given} pieces`
    const result = getQuantityDescription(given)
    expect(result).toEqual(expected)
  })

  test('It should translate less than 1 quantity to per piece', () => {
    const given = 0
    const expected = `per piece`
    const result = getQuantityDescription(given)
    expect(result).toEqual(expected)
  })
})

describe('When sorting pies by price', () => {
  let data = []
  beforeAll(() => {
    data = [
      {
        id: 1,
        storeId: 1,
        displayName: 'Beef',
        quantity: 5,
        price: 300,
        priceString: '$3.00',
        isPieOfTheDay: true
      },
      {
        id: 1,
        storeId: 1,
        displayName: 'Beef and curry',
        quantity: 2,
        price: 250,
        priceString: '$2.50'
      },
      {
        id: 1,
        storeId: 1,
        displayName: 'Chicken',
        quantity: 0,
        price: 270,
        priceString: '$2.70'
      }
    ]
  })

  test('It should sort the pies in ascending order', () => {
    const expected = data.sort((a, b) => {
      return a.price - b.price
    })
    const result = sortPiesByPriceAscending(data)
    expect(result).toEqual(expected)
  })

  test('It should sort the pies in ascending order when function used is for descending', () => {
    const expected = data.sort((a, b) => {
      return a.price - b.price
    })
    const result = sortPiesByPriceDescending(data)
    expect(result).not.toEqual(expected)
  })

  test('It should sort the pies in descending order', () => {
    const expected = data.sort((a, b) => {
      return b.price - a.price
    })
    const result = sortPiesByPriceDescending(data)
    expect(result).toEqual(expected)
  })

  test('It should sort the pies in descending order when function used is for ascending', () => {
    const expected = data.sort((a, b) => {
      return b.price - a.price
    })
    const result = sortPiesByPriceAscending(data)
    expect(result).not.toEqual(expected)
  })

  test('It should sort the pies in ascending order when using a sortKey', () => {
    const given = 'priceAsc'
    const expected = data.sort((a, b) => {
      return a.price - b.price
    })
    const result = sortPies(data, given)
    expect(result).toEqual(expected)
  })

  test('It should not sort the pies in ascending order when using the wrong sortKey', () => {
    const given = 'priceDesc'
    const expected = data.sort((a, b) => {
      return a.price - b.price
    })
    const result = sortPies(data, given)
    expect(result).not.toEqual(expected)
  })

  test('It should sort the pies in descending order when using a sortKey', () => {
    const given = 'priceDesc'
    const expected = data.sort((a, b) => {
      return b.price - a.price
    })
    const result = sortPies(data, given)
    expect(result).toEqual(expected)
  })

  test('It should not sort the pies in descending order when using the wrong sortKey', () => {
    const given = 'priceAsc'
    const expected = data.sort((a, b) => {
      return b.price - a.price
    })
    const result = sortPies(data, given)
    expect(result).not.toEqual(expected)
  })
})


// // Search Pies
// export const searchPies = (pies, searchKey) => {
//   return pies.filter(pie => {
//     return pie.displayName.toLowerCase().match(searchKey.toLowerCase())
//   })
// }

import { listPies, listPiesOfTheDay, getQuantityDescription } from '../api/pies'

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
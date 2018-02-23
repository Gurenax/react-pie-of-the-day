import { listStores, getStoreDetails, getStoreFullAddress } from '../api/stores'

describe('When retrieving a list of stores', () => {
  test('It should fetch a list of stores', async () => {
    const expected = 0
    let result = null
    try {
      const stores = await listStores()
      result = stores.length
    } catch (error) {
      result = error
    }
    expect(result).toBeGreaterThan(expected)
  })

  test('It should fetch a list of stores of type object', async () => {
    const expected = 'object'
    let result = null
    try {
      const stores = await listStores()
      result = typeof stores
    } catch (error) {
      result = error
    }
    expect(result).toEqual(expected)
  })
})

describe('When retrieving store details', () => {
  let data = []
  beforeAll(() => {
    data = [{
      "id": 1,
      "displayName": "Eleven-7",
      "address": "410 Collins Street",
      "city": "Melbourne",
      "state": "Victoria",
      "postcode": "3000",
      "mobile": "0481233123",
      "coords": {
        "latitude": "-37.816981",
        "longitude": "144.9584893"
      },
      "rating": 10
    },
    {
      "id": 2,
      "displayName": "Brian's Pies",
      "address": "366 Lonsdale Street",
      "city": "Melbourne",
      "state": "Victoria",
      "postcode": "3000",
      "mobile": "0486162311",
      "coords": {
        "latitude": "-37.8128448",
        "longitude": "144.9604634"
      },
      "rating": 8
    },
    {
      "id": 3,
      "displayName": "Hungry Jake's",
      "address": "345 Bourke Street",
      "city": "Melbourne",
      "state": "Victoria",
      "postcode": "3000",
      "mobile": "0412512333",
      "coords": {
        "latitude": "-37.8130036",
        "longitude": "144.9646799"
      },
      "rating": 9
    }]
  })
  test('It should fetch the details of a specific store', () => {
    const given = data[1].id
    const result = getStoreDetails(data, given)
    const expected = data[1]
    expect(result).toEqual(expected)
  })

  test('It should not fetch the details of a store which is not on the list', () => {
    const given = 4
    const result = getStoreDetails(data, given)
    expect(result).toBeFalsy()
  })
})


describe('When retrieving the full address of a store', () => {
  test('It should fetch the full address in proper order', () => {
    const data = [
      {
        id: 1,
        displayName: 'Eleven-7',
        address: '410 Collins Street',
        city: 'Melbourne',
        state: 'Victoria',
        postcode: '3000',
        mobile: '0481233123',
        coords: { latitude: '-37.816981', longitude: '144.9584893' },
        rating: 10
      }
    ]
    const given = data[0].id
    const result = getStoreFullAddress(data, given)
    const expected = `${data.address}, ${data.city}, ${data.state} ${data.postcode}`
    expect(result).toEqual(expected)
  })
})
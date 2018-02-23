import api from '../api/init'

describe('Check the connectivty when endpoints are valid', () => {
  test('All Stores: It should respond as status OK', async () => {
    const given = '/stores'
    const expected = 200
    let response = null
    try {
      response = await api.get(given)
    } catch (error) {
      response = error.response
    }
    expect(response.status).toBe(expected)
  })

  test('Store Pies: It should respond as status OK', async () => {
    const given = '/stores/1/pies'
    const expected = 200
    let response = null
    try {
      response = await api.get(given)
    } catch (error) {
      response = error.response
    }
    expect(response.status).toBe(expected)
  })

  test('All Pies: It should respond as status OK', async () => {
    const given = '/pies'
    const expected = 200
    let response = null
    try {
      response = await api.get(given)
    } catch (error) {
      response = error.response
    }
    expect(response.status).toBe(expected)
  })
})

describe('Check the connectivty when endpoints are invalid', () => {
  test('All Stores: It should respond as status 404', async () => {
    const given = '/stores2'
    const expected = 404
    let response = null
    try {
      response = await api.get(given)
    } catch (error) {
      response = error.response
    }
    expect(response.status).toBe(expected)
  })

  test('Store Pies: It should respond as status 404', async () => {
    const given = '/stores/1/pies2'
    const expected = 404
    let response = null
    try {
      response = await api.get(given)
    } catch (error) {
      response = error.response
    }
    expect(response.status).toBe(expected)
  })

  test('All Pies: It should respond as status 404', async () => {
    const given = '/pies2'
    const expected = 404
    let response = null
    try {
      response = await api.get(given)
    } catch (error) {
      response = error.response
    }
    expect(response.status).toBe(expected)
  })
})

import api from './init'

// Retrieve list of all stores
export const listStores = async () => {
  try {
    // GET: all stores
    const response = await api.get('/stores')
    return response.data
  } catch (error) {
    throw Error('Store list is unavailable at this time')
  }
}

// Retrieve store details
export const getStoreDetails = (allStores, storeId) => {
  // Return first match
  return allStores.filter(store => {
    return store.id === storeId
  })[0]
}

// Get store full address
export const getStoreFullAddress = store => {
  return `${store.address}, ${store.city}, ${store.state} ${store.postcode}`
}

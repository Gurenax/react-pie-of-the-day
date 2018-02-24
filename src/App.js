// @flow
import React, { Component } from 'react'
import { Icon } from 'react-fa'
import './bootstrap-4/css/bootstrap.min.css'
import './App.css'

// API
import { listPiesOfTheDay, sortPies, searchPies } from './api/pies'
import { listStores } from './api/stores'

// Components
import PieList from './components/PieList'
import Pagination from './components/Pagination'

// $FlowFixMe - Main App Component
class App extends Component {
  // $FlowFixMe - Cleaner style to initialise state instead of constructor
  state = {
    pies: [],
    stores: [],
    searchKey: '',
    sortKey: 'priceAsc',
    filteredPies: [],
    pagination: {
      start: 0,
      end: 5,
      itemsPerPage: 5,
      currentPage: 0
    },
    error: null
  }

  // Handle Pagination
  // $FlowFixMe - Turn off type annotations
  onChangePage = page => {
    this.setState(prevState => {
      // $FlowFixMe - Calculate page start
      const pageStart = page * prevState.pagination.itemsPerPage
      // $FlowFixMe - Calculate page end
      const pageEnd = pageStart + prevState.pagination.itemsPerPage
      // $FlowFixMe - Set state is only called when list is mounted
      return {
        pagination: {
          start: pageStart,
          end: pageEnd,
          // $FlowFixMe - itemsPerPage will never be undefined as it has initial state value
          itemsPerPage: prevState.pagination.itemsPerPage,
          currentPage: page
        }
      }
    })
  }

  // Handle search and sort
  // $FlowFixMe - Turn off type annotations
  onFilter = () => {
    this.setState(prevState => {
      // $FlowFixMe - Get search key from prev state
      const searchKey = prevState.searchKey
      // $FlowFixMe - Get sort key from prev state
      const sortKey = prevState.sortKey
      // $FlowFixMe - Sort the Pies
      // const sortedPies = sortPies(prevState.pies, sortKey)
      // // Search Pie by Name
      // const filteredPies = searchPies(sortedPies, searchKey)
      // // Search Pie by Name
      const filteredPies = searchPies(prevState.pies, searchKey)
      // $FlowFixMe - Sort the Pies
      const sortedPies = sortPies(filteredPies, sortKey)
      // $FlowFixMe - Set filtered list to state
      return {
        filteredPies: sortedPies
      }
    })
  }

  // On search, store the sort key to state then handle both search/sort filters
  // $FlowFixMe - Turn off type annotations
  onSearch = event => {
    // $FlowFixMe - Set search key to state
    this.setState({
      searchKey: event.target.value,
      pagination: {
        start: 0,
        end: 5,
        itemsPerPage: 5,
        currentPage: 0
      }
    })
    this.onFilter()
  }

  // On sort, store the sort key to state then handle both search/sort filters
  // $FlowFixMe - Turn off type annotations
  onSort = event => {
    // $FlowFixMe - Set sort key to state
    this.setState({
      sortKey: event.target.value
    })
    this.onFilter()
  }

  // Fetch Data from API
  // $FlowFixMe - Turn off type annotations
  fetchData = async () => {
    // listPiesOfTheDay().then(pies => {
    //   listStores().then(stores => {
    //     const sortedPies = sortPies(pies)
    //     this.setState({
    //       pies: sortedPies,
    //       stores: stores,
    //       error: null
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({
    //       error: error
    //     })
    //   })
    // })
    // .catch(error => {
    //   this.setState({
    //     error: error
    //   })
    // })
    try {
      const sortedPies = sortPies(await listPiesOfTheDay())
      const stores = await listStores()
      // $FlowFixMe - Set fetched data to state
      this.setState({
        pies: sortedPies,
        stores: stores,
        error: null
      })
    } catch (error) {
      // $FlowFixMe - Set error message to state
      throw error
    }
  }

  // When App is loaded, fetch API data
  // $FlowFixMe - Turn off type annotations
  componentDidMount = () => {
    this.fetchData()
  }

  render = () => {
    // $FlowFixMe - Get variables from app state
    const { pies, filteredPies, stores, pagination, error } = this.state
    // Limit number of displayed Pies
    const piePage =
      filteredPies.length > 0
        ? filteredPies.slice(pagination.start, pagination.end)
        : pies.slice(pagination.start, pagination.end)
    // Determine length of list
    const listLength =
      filteredPies.length > 0 ? filteredPies.length : pies.length

      console.log('piePage.length', piePage.length)
            console.log('stores.length', stores.length)
            console.log('pies.length', pies.length)
            console.log('filteredPies.length', filteredPies.length)
    return (
      <div className="App">
        <h1 className="lobster text-center apptitle">
          <a href="/" className="align-middle">
            Pie of the Day
          </a>
        </h1>
        <div className="container mt-4">
          {
            stores.length > 0 && pies.length > 0 ? (
            <div>
              <PieList
                pies={piePage}
                stores={stores}
                onSearch={this.onSearch}
                onSort={this.onSort}
              />
              <Pagination
                pagination={pagination}
                listLength={listLength}
                onChangePage={this.onChangePage}
              />
            </div>
          ) : !error ? (
            <div className="text-center mt-5">
              <Icon spin name="spinner" className="display-2 spinner" />
            </div>
          ) : (
            <div className="alert alert-danger">
              <h2>Error</h2>
              {error.message}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App

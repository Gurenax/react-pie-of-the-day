import React, { Component } from 'react'
import './bootstrap-4/css/bootstrap.min.css'
import './App.css'

// API
import { listPiesOfTheDay } from './api/pies'
import { listStores } from './api/stores'

// Components
import PieList from './components/PieList'
import Pagination from './components/Pagination'

class App extends Component {
  state = {
    // isMounted: false,
    pies: [],
    stores: [],
    pagination: {
      start: 0,
      end: 5,
      itemsPerPage: 5,
      currentPage: 0
    },
    error: null
  }

  // Handle Pagination
  changePage = page => {
    this.setState(prevState => {
      // Calculate page start
      const pageStart = page * prevState.pagination.itemsPerPage
      // Calculate page end
      const pageEnd = pageStart + prevState.pagination.itemsPerPage

      return {
        pagination: {
          start: pageStart,
          end: pageEnd,
          itemsPerPage: prevState.pagination.itemsPerPage,
          currentPage: page
        }
      }
    })
  }

  // Fetch Data from API
  fetchData = async () => {
    try {
      this.setState({
        pies: await listPiesOfTheDay(),
        // pies:[{"id":1,"storeId":1,"displayName":"Beef","quantity":5,"price":300,"priceString":"$3.00","isPieOfTheDay":true},{"id":1,"storeId":2,"displayName":"Beef and curry","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":3,"displayName":"Beef and curry","quantity":1,"price":200,"priceString":"$2.00","isPieOfTheDay":true},{"id":1,"storeId":4,"displayName":"Beef and curry","quantity":1,"price":280,"priceString":"$2.80","isPieOfTheDay":true},{"id":1,"storeId":6,"displayName":"Beef","quantity":3,"price":230,"priceString":"$2.30","isPieOfTheDay":true},{"id":1,"storeId":7,"displayName":"Beef and mushroom","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":1,"displayName":"Beef","quantity":5,"price":300,"priceString":"$3.00","isPieOfTheDay":true},{"id":1,"storeId":2,"displayName":"Beef and curry","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":3,"displayName":"Beef and curry","quantity":1,"price":200,"priceString":"$2.00","isPieOfTheDay":true},{"id":1,"storeId":4,"displayName":"Beef and curry","quantity":1,"price":280,"priceString":"$2.80","isPieOfTheDay":true},{"id":1,"storeId":6,"displayName":"Beef","quantity":3,"price":230,"priceString":"$2.30","isPieOfTheDay":true},{"id":1,"storeId":7,"displayName":"Beef and mushroom","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":1,"displayName":"Beef","quantity":5,"price":300,"priceString":"$3.00","isPieOfTheDay":true},{"id":1,"storeId":2,"displayName":"Beef and curry","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":3,"displayName":"Beef and curry","quantity":1,"price":200,"priceString":"$2.00","isPieOfTheDay":true},{"id":1,"storeId":4,"displayName":"Beef and curry","quantity":1,"price":280,"priceString":"$2.80","isPieOfTheDay":true},{"id":1,"storeId":6,"displayName":"Beef","quantity":3,"price":230,"priceString":"$2.30","isPieOfTheDay":true},{"id":1,"storeId":7,"displayName":"Beef and mushroom","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":1,"displayName":"Beef","quantity":5,"price":300,"priceString":"$3.00","isPieOfTheDay":true},{"id":1,"storeId":2,"displayName":"Beef and curry","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":3,"displayName":"Beef and curry","quantity":1,"price":200,"priceString":"$2.00","isPieOfTheDay":true},{"id":1,"storeId":4,"displayName":"Beef and curry","quantity":1,"price":280,"priceString":"$2.80","isPieOfTheDay":true},{"id":1,"storeId":6,"displayName":"Beef","quantity":3,"price":230,"priceString":"$2.30","isPieOfTheDay":true},{"id":1,"storeId":7,"displayName":"Beef and mushroom","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":1,"displayName":"Beef","quantity":5,"price":300,"priceString":"$3.00","isPieOfTheDay":true},{"id":1,"storeId":2,"displayName":"Beef and curry","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":3,"displayName":"Beef and curry","quantity":1,"price":200,"priceString":"$2.00","isPieOfTheDay":true},{"id":1,"storeId":4,"displayName":"Beef and curry","quantity":1,"price":280,"priceString":"$2.80","isPieOfTheDay":true},{"id":1,"storeId":6,"displayName":"Beef","quantity":3,"price":230,"priceString":"$2.30","isPieOfTheDay":true},{"id":1,"storeId":7,"displayName":"Beef and mushroom","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":1,"displayName":"Beef","quantity":5,"price":300,"priceString":"$3.00","isPieOfTheDay":true},{"id":1,"storeId":2,"displayName":"Beef and curry","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true},{"id":1,"storeId":3,"displayName":"Beef and curry","quantity":1,"price":200,"priceString":"$2.00","isPieOfTheDay":true},{"id":1,"storeId":4,"displayName":"Beef and curry","quantity":1,"price":280,"priceString":"$2.80","isPieOfTheDay":true},{"id":1,"storeId":6,"displayName":"Beef","quantity":3,"price":230,"priceString":"$2.30","isPieOfTheDay":true},{"id":1,"storeId":7,"displayName":"Beef and mushroom","quantity":1,"price":250,"priceString":"$2.50","isPieOfTheDay":true}],
        stores: await listStores(),
        error: null
      })
    } catch (error) {
      this.setState({
        pies: [],
        stores: [],
        error: error
      })
    }
  }

  // When App is loaded, fetch API data
  componentDidMount = () => {
    this.fetchData()
  }

  render = () => {
    // Get variables from app state
    const { pies, stores, pagination } = this.state
    // Limit number of displayed Pies
    const piePage = pies.slice(pagination.start, pagination.end)

    return (
      <div className="App">
        <div className="container">
          <h1 className="lobster text-center apptitle">Pie of the Day</h1>
          {!!pies && !!stores && <PieList pies={piePage} stores={stores} />}
          {!!pies && (
            <Pagination
              pagination={pagination}
              listLength={pies.length}
              changePage={this.changePage}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App

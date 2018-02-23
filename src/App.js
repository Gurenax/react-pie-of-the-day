import React, { Component } from 'react'
import './bootstrap-4/css/bootstrap.min.css'
import './App.css'

// API
import { listPiesOfTheDay } from './api/pies'
import { listStores } from './api/stores'

// Components
import PieList from './components/PieList'

class App extends Component {
  state = {
    // isMounted: false,
    pies: [],
    stores: [],
    pagination: {
      start: 0,
      end: 5
    },
    error: null
  }

  async fetchData() {
    // if(this.state.isMounted){
      try {
        this.setState({
          pies: await listPiesOfTheDay(),
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
    // }
  }

  componentDidMount() {
    // this.setState({
    //   isMounted: true
    // })
    this.fetchData()
  }

  render() {
    const { pies, stores, pagination } = this.state
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="lobster text-center">Pie of the Day</h1>
          {!!pies && !!stores && <PieList pies={pies.slice(pagination.start, pagination.end)} stores={stores} />}
        </div>
      </div>
    )
  }
}

export default App

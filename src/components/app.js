import React, { Component } from 'react'

import SearchBar from './../container/search_bar'
import CardList from './../container/card_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    )
  }
}

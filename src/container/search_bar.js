import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchCard } from './../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      card: [],
    }
  }

  onInputChange = event => {
    this.setState({ term: event.target.value })
    this.props.fetchCard(this.state.term)
  }

  render() {
    console.log(this.state.card)
    console.log(this.props.card)
    return (
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
          Card name:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insert a Yugioh card name"
          aria-describedby="basic-addon1"
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}

function mapStateToProps({ card }) {
  return { card }
}

export default connect(mapStateToProps, { fetchCard })(SearchBar)

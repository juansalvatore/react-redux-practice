import React, { Component } from 'react'

export default class CardList extends Component {
  constructor() {
    super()

    this.state = {
      card: [],
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            {/* <img src="..." alt="..." /> */}
            <div className="caption">
              <h3>Thumbnail label</h3>
              <p>
                Lorem ipsum orem ipsum orem ipsumorem ipsum orem ipsum orem
                ipsum orem ipsum orem ipsum orem ipsum
              </p>
              <p>
                <a href="#" className="btn btn-primary" role="button">
                  Button
                </a>{' '}
                <a href="#" className="btn btn-default" role="button">
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

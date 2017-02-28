import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import data from 'src/data.json'

const MAPS_API_KEY = 'AIzaSyBNN6aDjQEw9c1eERGOa4FyRM33CUelbK0'

export default class Restaurant extends Component {

  state = {
    name: 'Loading...',
    mapPlaceId: 'ChIJQao6aWPmwogR_4vUvANAzAQ',
    description: '',
    websiteURL: '',
    imageURL: ''
  }

  static propTypes = {
    params: React.PropTypes.object
  }

  componentDidMount () {
    this.setState(data[this.props.params.slug])
  }

  render () {
    return <div className='restaurant'>
      <h1>{this.state.name}</h1>
      <p className='info'>
        {this.state.description}
      </p>
      <p className='info'>
        <Image src={this.state.imageURL} responsive />
      </p>
      <h3 className='info'>
        <a href={this.state.websiteURL}>WEBSITE</a>
      </h3>
      <div className='google-maps'>
        <iframe width='100%' height='450' frameBorder='0' style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${this.state.mapPlaceId}&key=${MAPS_API_KEY}`} allowFullScreen />
      </div>
    </div>
  }
}

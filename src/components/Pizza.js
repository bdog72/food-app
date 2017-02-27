import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
export default class Pizza extends Component {

  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div className='well' style={wellStyles}>
      <LinkContainer to='/restaurant/little-italy'>
        <Button bsSize='large' block>Little Italy</Button>
      </LinkContainer>
      <LinkContainer to='/restaurant/italia-mia'>
        <Button bsSize='large' block>Italia Mia</Button>
      </LinkContainer>
      <LinkContainer to='/restaurant/paisanos'>
        <Button bsSize='large' block>Paisanos</Button>
      </LinkContainer>
      <LinkContainer to='/restaurant/28-grams'>
        <Button bsSize='large' block>28 Grams</Button>
      </LinkContainer>
    </div>
  }
}

import React, {Component} from 'react'
import { PageHeader, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <LinkContainer to='/'>
        <PageHeader className='head'>
          <h1>Food-Dot-Com</h1>
        </PageHeader>
      </LinkContainer>
      <LinkContainer to='/Pizza'>
        <Button bsStyle='primary'>Primary</Button>
      </LinkContainer>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}

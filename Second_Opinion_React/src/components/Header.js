import React, { Component } from 'react'
import { MenuMenu, MenuItem, Input, Menu, Container } from 'semantic-ui-react'
import '../App';
export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogin = (()=>{})
  render() {
    const { activeItem } = this.state

    return (
    
   <div className='ui menu'>
   
      <img src="logo.png" />
      <Menu secondary>
     
        <MenuItem>  <h1 style={{color:'#2AB8C3'}}>Second Opinion</h1></MenuItem>
    
        <MenuItem 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          style={{ fontSize: '20px' }} 
        />
        <MenuItem
          name='About Us'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          style={{ fontSize: '20px' }} 
        />
        <MenuItem
          name='Contact Us'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          style={{ fontSize: '20px' }} 
        />
        <MenuMenu position='right'>
          <MenuItem  style={{ fontSize: '20px' }} >
            <Input icon='search' placeholder='Search...' />
          </MenuItem>
          <MenuItem
            name='Login'
            active={activeItem === 'login'}
            onClick={()=>{this.handleItemClick();this.handleLogin()}}
            style={{ fontSize: '20px' }} 
          />
        </MenuMenu>
        
      </Menu>
     
      </div>
      
    )
  }
}


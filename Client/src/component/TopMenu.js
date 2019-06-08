import React ,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';

  import CartContext from '../context/DataContext';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NewApplication</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/product/">Product</NavLink>
              </NavItem>
              <CartContext.Consumer>
                {({cartItem})  =><NavItem>
                  <NavLink href="/cart/">Cart ({localStorage.getItem('number') === null ? 0 : localStorage.getItem('number')})</NavLink>
                </NavItem> }       
              </CartContext.Consumer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopMenu;
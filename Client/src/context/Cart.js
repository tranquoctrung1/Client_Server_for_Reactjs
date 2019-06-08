import React , {Component} from 'react';

import CartContext from './DataContext';


class CartProvider extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            cartItem: []
        }

        this.addToCart = this.addToCart.bind(this);
    };

    addToCart(product)
    {
        console.log(product)
        this.setState({
            cartItem: this.state.cartItem.concat(product)
        })
        
        if(localStorage.getItem('number') === null || localStorage.getItem('number') <= this.state.cartItem.length)
            localStorage.setItem('number',this.state.cartItem.length)
        
        localStorage.setItem('item',[...this.state.cartItem])

        console.log(localStorage.getItem('item'))
        
    }

    render ()
    {
        const {children} = this.props;
        return(
            <CartContext.Provider value=
            {{cartItem: this.state.cartItem,
            addToCart: this.addToCart}}>
                {children}
            </CartContext.Provider>
        )
    }

}

export default CartProvider;
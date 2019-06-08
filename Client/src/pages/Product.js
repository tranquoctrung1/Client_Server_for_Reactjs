import React,{Component} from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import axios from 'axios';

import './product.sass'

import CartContext from '../context/DataContext';

class Product extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            products: [],
            loading: true
        }
    };

    componentDidMount() 
    {
        axios.get('http://localhost:8080/products').then((res) => 
        {
            console.log(res.data)
            this.setState({
                products: [...res.data],
                loading: false
            })
        })
    }

    render() 
    {
        const {products,loading} = this.state
        return (
            <Container>
                <Row>
                    {loading && 'Loading......'}
                    {!loading && products.map((product,index) => (
                        <Col md={4} key={index}>
                            <Card >
                                <CardImg 
                                    top width="100%" 
                                    src={product.imageUrl} 
                                    alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <CartContext.Consumer>
                                        {({addToCart}) =>  <Button onClick={() => addToCart(product)}>Add to cart</Button>}
                                    </CartContext.Consumer>
                                </CardBody>
                        </Card>   
                      </Col>             
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Product;
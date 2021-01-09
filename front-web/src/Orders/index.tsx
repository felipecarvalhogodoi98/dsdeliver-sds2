import React, { useEffect, useState } from 'react'
import { Product, OrderLocationData } from './types'
import ProductsList from './ProductsList'
import StepesHeader from './StepsHeader'
import './styles.css'
import { fetchProducts } from '../api'
import OrderLocation from './OrderLocation'

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(
        () => {
            fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
        },
        []
    );

    return (
        <div className="orders-container">
            <StepesHeader/>
            <ProductsList products = {products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Orders;
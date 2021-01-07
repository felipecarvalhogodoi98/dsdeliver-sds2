import React, { useEffect, useState } from 'react'
import { Product } from './types'
import ProductsList from './ProductsList'
import StepesHeader from './StepsHeader'
import './styles.css'
import { fetchProducts } from '../api'

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    
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
        </div>
    )
}

export default Orders;
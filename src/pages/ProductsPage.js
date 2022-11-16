import React from 'react'
import SlideBrands from '../components/Products/SlideBrands'
import Filter from '../components/Products/Filter'
import ProductsWrapper from '../components/Products/ProductsWrapper'
const ProductsPage = () => {
    return (
        <main>
            <SlideBrands/>
            <Filter/>
            <ProductsWrapper/>
        </main>
    )
}

export default ProductsPage
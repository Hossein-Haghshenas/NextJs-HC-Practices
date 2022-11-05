import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
    return (
        <>
            <h1>ProductsPage</h1>
            <h2>
                <Link href="products/books" >
                Books list
                </Link>
            </h2>
            <h2>
                <Link href="products/games" >
                Games list
                </Link>
            </h2>
        </>

    )
}

export default ProductsPage
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ProductCard from '../../components/ProductCard'

function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data: products } = await axios.get('/api/products')
      setProducts(products)
    }
    getProducts()
  }, [])

  const toProductListItem = (product) => (
    <Col key={product._id} sm={12} md={6} lg={4}>
      <ProductCard product={product} />
    </Col>
  )

  return (
    <Container>
      <h1 className="py-3">{'Time for your favourite coffee'}</h1>
      <Row>{products.map(toProductListItem)}</Row>
    </Container>
  )
}

export default HomeScreen

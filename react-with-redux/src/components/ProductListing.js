import { useSelector } from 'react-redux'

import ProductItem from './ProductItem'

export default function ProductListing(props) {

  const products = useSelector(state => state.productsReducer)

  return <div>
    {products.list.map(product => <ProductItem key={product.id} item={product} />)}
  </div>
}
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from './ProductItem'

export default function ProductListing(props) {

  return <div>
    {([1, 2, 3, 4, 5]).map(i => <ProductItem key={i} item={'item ' + i} />)}
  </div>
}
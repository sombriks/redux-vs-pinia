import { useSelector, useDispatch } from 'react-redux'

import { filterActions, productActions } from '../store'

export default function ProductPaginator(props) {

  const filter = useSelector(state => state.filterReducer)
  const products = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()

  const prevPage = () => {
    dispatch(filterActions.setPage(filter.page - 1))
    dispatch(productActions.queryProducts(filter.query, filter.page - 1))
  }

  const nextPage = () => {
    dispatch(filterActions.setPage(filter.page + 1))
    dispatch(productActions.queryProducts(filter.query, filter.page + 1))
  }

  return <div>
    <button disabled={filter.page < 2} onClick={prevPage}>prev</button>
    <span>{filter.page}</span>
    <button disabled={products.list.length < products.pageSize} onClick={nextPage}>next</button>
  </div>
}

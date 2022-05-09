import { useSelector, useDispatch } from 'react-redux'

import { productActions, filterActions, userActions } from '../store'

export default function NavBar(props) {
  const userState = useSelector(state => state.userReducer)
  const filter = useSelector(state => state.filterReducer)
  const dispatch = useDispatch()

  const queryProducts = (e) => {
    dispatch(productActions.queryProducts(e.target.value))
    dispatch(filterActions.setQuery(e.target.value))
    dispatch(filterActions.setPage(1))
  }

  return <div>
    <input value={filter.query} onChange={queryProducts} />
    <button onClick={() => dispatch(userActions.setLogged(!userState.logged))}>
      {userState.logged ? 'Logout' : 'Login'}
    </button>
  </div>
}
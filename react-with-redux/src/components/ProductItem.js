import { useSelector, useDispatch } from 'react-redux'

export default function ProductItem(props) {
  return <div>{props.item.name}</div>
}
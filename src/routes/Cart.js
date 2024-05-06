import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrease, deleteProduct, increase } from "./../store/cartSlice.js";

function Cart() {

	let state = useSelector((state) => state);

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>수량변경</th>
					</tr>
				</thead>
				<tbody>
					{
						state.cartItem.map((item, i) => { return (<ItemRow item={item} />) })
					}
				</tbody>
			</Table>
		</div>
	)
}

function ItemRow(props) {
	let dispatch = useDispatch();

	return (<tr>
		<td>{props.item.id}</td>
		<td>{props.item.name}</td>
		<td>{props.item.count}</td>
		<td>
			<button onClick={() => { dispatch(increase(props.item.id)) }}>+</button>
			<button onClick={() => { dispatch(decrease(props.item.id)) }}>-</button>
		</td>
		<td>
			<button onClick={() => { dispatch(deleteProduct(props.item.id)) }}>삭제</button>
		</td>
	</tr >)
}

export default Cart;
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {

	let item = useSelector((state) => { return state.cartItem });

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
						item.map((item, i) => { return (<ItemRow item={item} />) })
					}
				</tbody>
			</Table>
		</div>
	)
}

function ItemRow(props) {
	return (<tr>
		<td>{props.item.id}</td>
		<td>{props.item.name}</td>
		<td>{props.item.count}</td>
		<td>안녕</td>
	</tr>)
}

export default Cart;
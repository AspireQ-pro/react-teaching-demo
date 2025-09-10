import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './store';
function Cart() {

    const cart = useSelector(state => state.cart);  // get the states from the store
    const dispatch=useDispatch(); //sending the actions to the store
    return <div>
        <h2>Cart Component</h2>
        <button onClick={()=>dispatch(addItem("Apple"))}>Add Apple</button>
        <button onClick={()=>dispatch(addItem("Banana"))}>Add Banana</button>

        <ul>
            {cart.map((item, index) => (
                <li key={index}>
                    {item}{" "} <button onClick={() => dispatch(removeItem(index))}>Remove</button>
                </li>
            ))}
        </ul>
        </div>;
}

export default Cart;
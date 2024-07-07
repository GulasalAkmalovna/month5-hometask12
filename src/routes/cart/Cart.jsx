import { useContext } from "react" 
import AppContext from "../../context/store"
import "./Cart.css"

const Cart = () => {

  const [state, dispatch] = useContext(AppContext);
  console.log(state)

  const handleRemoveFromCart = (id) => {
    dispatch({type: "REMOVE_FROM_CART", id})
  }

  return (
    <div className="wrapper">
        {
          state.map((user) => {
            return (
              <div className="card" key={user.id}>
                <img className="image" src={user.avatar} alt={user.first_name} />
                <h1>{user.first_name} {user.last_name}</h1>
                <p>{user.email}</p>
                <button className="btn" onClick={() => handleRemoveFromCart(user.id)}>bo`shatish</button>
              </div>
            )
          })
        }
    </div>
  )
}

export default Cart
import { useContext } from "react" 
import AppContext from "../../context/store"
import "./Home.css"

const Home = () => {
    const [state, dispatch] = useContext(AppContext);

  let users = [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Jane",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
    }
  ]

    const handleAddToCart = (user) => {
      dispatch({type: "ADD_TO_CART", user})
    }
  return (
    <div className="wrapper">
      {
        users.map((user) => {
          return (
            <div className="home">
              <div className="card" key={user.id}>
                <img className="image" src={user.avatar} alt={user.first_name} />
                <h1>{user.first_name} {user.last_name}</h1>
                <p>{user.email}</p>
                <button className="btn" onClick={() => handleAddToCart(user)}>Ishdan bo'shatish</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
import React, { Component } from 'react';

import './App.css';
import FoodForm from './components/FoodForm';
import Foods from './components/Foods'; //Home
import Food from './components/Food'; 
// import FoodsList from "./components/FoodsFood";
// import Home from "./components/Home";
// import "./styles.css";


import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import axios from "axios";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFood: null,
      foods: [],
      error: ""
    };
  }
  // add any needed code to ensure that the foods collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Foods.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  componentDidMount() {
    axios
      .get("http://localhost:3333/foods")
      .then(res => {
        console.log(res);
        this.setState({ foods: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  

  addFood = (e, food) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/foods', food)
      .then(res => {
        this.setState({
          foods: res.data
        });
        // HTTP STEP V - Clear data form in ItemForm and route to /item-list
        this.props.history.push('/food-list');
      })
      .catch(err => {
        console.log(err);
      });
  };  


  setUpdateForm = (e, food) => {
    e.preventDefault();
    this.setState({
      activeFood: food
    });
    this.props.history.push("/food-form");
  };
  


  updateFood = (e, food) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/foods${food.id}`, food)
      .then(res => {
        this.setState({
          activeFood: null,
          foods: res.data
        });
        this.props.history.push("/food-list");
      })
      .catch(err => {
        console.log(err);
      });
  };





render() {
  return (
    <div className="App">
      <nav>

        <div className="nav-links">
        <NavLink to="/food-form">{`${
              this.state.activeFood ? 'Update' : 'Add'
            } Food`}</NavLink>

          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
      </nav>

      

      {/* <Route exact path="/" component={Foods} /> cHECK LINE 143*/}
      <Route
        exact
        path="/"
        render={props => (
          <Foods
            {...props} // this is the same as below
            //               match={props.match}
            //               history={props.history}
            //               location={props.location}
            foods={this.state.foods}
          />
        )}
      />
      <Route
        path="/food-list/:id"
        render={props => (
        // <Food {...props} foods={this.state.foods} />}
        <Food
        {...props}
        // deleteItem={this.deleteItem}
        foods={this.state.foods}
        setUpdateForm={this.setUpdateForm}
      />
    )}
      />

      <Route
      path="/food-form/"
      render={props => (
<FoodForm
              {...props}
              activeFood ={this.state.activeFood}
              addFood={this.addFood}
              updateFood={this.updateFood}
            />
          )}
        />
      </div>
    );
  }
}
 

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);

export default App;









// const Welcome = ({user, onSignOut})=> {
//     // This is a dumb "stateless" component
//     return (
//       <div>
//         Welcome <strong>{user.username}</strong>!
//         <a href="javascript:;" onClick={onSignOut}>Sign out</a>
//       </div>
//     )
//   }
  
//   class LoginForm extends React.Component {
    
//     // Using a class based component here because we're accessing DOM refs
   
//     handleSignIn(e) {
//       e.preventDefault()
//       let username = this.refs.username.value
//       let password = this.refs.password.value
//       this.props.onSignIn(username, password)
//     }
    
//     render() {
//       return (
//         <form onSubmit={this.handleSignIn.bind(this)}>
//           <h3>Sign in</h3>
//           <input type="text" ref="username" placeholder="enter you username" />
//           <input type="password" ref="password" placeholder="enter password" />
//           <input type="submit" value="Login" />
//         </form>
//       )
//     }
  
//   }
  
  
//   class App extends React.Component {
    
//     constructor(props) {
//       super(props)
//       // the initial application state
//       this.state = {
//         user: null
//       }
//     }
    
//     // App "actions" (functions that modify state)
//     signIn(username, password) {
//       // This is where you would call Firebase, an API etc...
//       // calling setState will re-render the entire app (efficiently!)
//       this.setState({
//         user: {
//           username,
//           password,
//         }
//       })
//     }
    
//     signOut() {
//       // clear out user from state
//       this.setState({user: null})
//     }
    
//     render() {
//       // Here we pass relevant state to our child components
//       // as props. Note that functions are passed using `bind` to
//       // make sure we keep our scope to App
//       return (
//         <div>
//           <h1>My cool App</h1>
//           { 
//             (this.state.user) ? 
//               <Welcome 
//                user={this.state.user} 
//                onSignOut={this.signOut.bind(this)} 
//               />
//             :
//               <LoginForm 
//                onSignIn={this.signIn.bind(this)} 
//               />
//           }
//         </div>
//       )
      
//     }
    
//   }
  
//   ReactDOM.render(<App/>, document.getElementById("app"))
  
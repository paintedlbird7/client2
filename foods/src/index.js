import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);







// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// // STEP I Import and wrap App in <Router />
// // STEP II import <Route /> - Build component for your route
// // STEP IV import <Link /> - use Links to navigate inside our app
// import {
//   BrowserRouter as Router,
//   NavLink,
//   Route,
//   withRouter
// } from 'react-router-dom';

// // Import Components here - (Usually these will be for Routes)
// import Home from './components/Home';
// import ItemList from './components/ItemList';
// import Item from './components/Item';
// // HTTP STEP III - Build a route for our Form
// import ItemForm from './components/ItemForm';

// // HTTP STEP I - remove data import, use axios to GET data from local server

// import './styles.css';

// class App extends React.Component {
//   // add constructor and CDM
//   constructor() {
//     super();
//     this.state = {
//       activeItem: null,
//       items: [],
//       error: ''
//     };
//   }

//   componentDidMount() {
//     console.log('CDM now running');
//     // http://localhost:3333 is the address to the server doorstep
//     // /items is the "endpoint"
//     axios
//       .get('http://localhost:3333/items')
//       .then(res => {
//         console.log(res);
//         this.setState({ items: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//         this.setState({ error: err });
//       });
//   }

//   // HTTP STEP IV - create an addItem function for our POST request
//   // Pass addItem to <ItemForm />
//   // addItem takes in an event, and the item object from the form for the POST
//   addItem = (e, item) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:3333/items', item)
//       .then(res => {
//         this.setState({
//           items: res.data
//         });
//         // HTTP STEP V - Clear data form in ItemForm and route to /item-list
//         this.props.history.push('/item-list');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   // HTTP STEP VI - Create a deleteItem function that takes in an event and an id
//   // and makes a DELETE request to delete the item
//   deleteItem = (e, id) => {
//     e.preventDefault();
//     console.log('now in deleteItem in App');
//     axios
//       .delete(`http://localhost:3333/items/${id}`)
//       .then(res => {
//         console.log('Data is back, now set state and reroute', res.data);
//         this.setState({
//           items: res.data
//         });
//         this.props.history.push('/item-list');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   // HTTP STEP VIII - create a function called setUpdateForm
//   // It will take in an event, and an item, and set that item
//   // to state, and then route user to the form route
//   setUpdateForm = (e, item) => {
//     e.preventDefault();
//     this.setState({
//       activeItem: item
//     });
//     this.props.history.push('/item-form');
//   };

//   // HTTP STEP VII - Create an updateItem function takes in an event and an item
//   // sets state with the response data, and clears out the activeItem on state
//   updateItem = (e, item) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:3333/items/${item.id}`, item)
//       .then(res => {
//         this.setState({
//           activeItem: null,
//           items: res.data
//         });
//         this.props.history.push('/item-list');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     console.log('rendering App', this.state.items);
//     return (
//       <div className="App">
//         {/* STEP IX - Use NavLink to add styling attributes to our nav links */}
//         <nav>
//           <h1 className="store-header">Dustin's Trinkets</h1>
//           <div className="nav-links">
//             <NavLink to="/item-form">{`${
//               this.state.activeItem ? 'Update' : 'Add'
//             } Item`}</NavLink>
//             <NavLink exact to="/">
//               Home
//             </NavLink>
//             <NavLink to="/item-list">Shop</NavLink>
//           </div>
//         </nav>

//         {/* STEP III - Add Routes for our App */}
//         <Route exact path="/" component={Home} />

//         {/* STEP VII - pass props to component being rendered with <Route /> */}
//         {/* Do not do inline rendering with the component prop - use the render prop! */}
//         <Route
//           path="/item-list"
//           exact
//           render={
//             props => <ItemList {...props} items={this.state.items} />
//             // same as
//             //   <ItemList
//             //     history={props.history}
//             //     items={this.state.items}
//             //     location={props.location}
//             //     match={props.match}
//             //   />
//           }
//         />

//         {/* STEP V - Use dynamic params to route to Item */}
//         {/* the ":" signifies that id is a dynamic parameter - is a banana name */}
//         <Route
//           path="/item-list/:id"
//           render={props => (
//             <Item
//               {...props}
//               deleteItem={this.deleteItem}
//               items={this.state.items}
//               setUpdateForm={this.setUpdateForm}
//             />
//           )}
//         />

//         <Route
//           path="/item-form"
//           render={props => (
//             <ItemForm
//               {...props}
//               activeItem={this.state.activeItem}
//               addItem={this.addItem}
//               updateItem={this.updateItem}
//             />
//           )}
//         />
//       </div>
//     );
//   }
// }

// // Use withRouter (HOC) to create a NEW component, pass in App, then render
// // the NEW component in the ReactDOM.render function

// const AppWithRouter = withRouter(App);
// // export default withRouter(Component);

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <Router>
//     <AppWithRouter />
//   </Router>,
//   rootElement
// );

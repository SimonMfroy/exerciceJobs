import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import Home from 'pages/Home';
 //import Navbar from 'components/Navbar';
import Job from 'pages/Job';

const App = () => {
  return (
  	<Router>
  		<div className="App">
  			<main>
  				<Switch>
  					<Route path="/" exact>
              <Home />
            </Route>
            <Route path="/job/:jobSlug" >
              <Job />
            </Route>
  				</Switch>
  			</main>
  		</div>
  	</Router>
  );
}


ReactDOM.render(<App />,document.getElementById('root'));


//<Route path="/book/:bookSlug">
//<Book />
//</Route>

// <Router>
//     	<div className="App">
//     		<Navbar />
//     		<main>
//     		<switch>
//     			<Route path="/" exact>
//   					<Home />
// 					</Route>
//     			<Route path="/about">
//   					<About />
// 					</Route>
// 					<Route path="/documentation">
//   					<Documentation />
// 					</Route>
// 				</switch>
// 				</main>
//     	</div>
//     </Router>
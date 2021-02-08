import React, {useState, useEffect} from 'react';
import {Navbar, Nav, FormControl, Button, Form, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {

	const [allJobs, setAllJobs] = React.useState("");
	const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
  	const { value } = event.target;
    setSearch(value);
    console.log(value);
  }


const searchJob = () => {
	fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${search}`) // http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=1st
	.then((response)=>response.json())
	.then((response)=>{
		console.log(response);
		!response.error && setAllJobs(response);
	});
}

React.useEffect(() => {
	search.length > 3 && searchJob();
}, [search]);

// React.useEffect(() => {
//   localStorage.setItem(Config.STORAGE_KEY, JSON.stringify(notes));
// }, [notes]);


	return(
		<div>
			<Navbar bg="dark" variant="dark">
    		<Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
    		<Nav className="mr-auto"></Nav>
    		<Form inline>
      		<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} value={search} />
    		</Form>
  		</Navbar>
			<Container>
				{ 
					allJobs && <ul>
					<li key={allJobs[0].uuid}> <Link to={`/job/${allJobs[0].uuid}`}>{allJobs[0].normalized_job_title}</Link> </li>
					<li key={allJobs[1].uuid}> <Link to={`/job/${allJobs[1].uuid}`}>{allJobs[1].normalized_job_title}</Link> </li>
					<li key={allJobs[2].uuid}> <Link to={`/job/${allJobs[2].uuid}`}>{allJobs[2].normalized_job_title}</Link> </li>
				</ul>}
			</Container>

		</div>
	)

};

export default Home;

//<li> <Link to="/about">about</Link> </li>  <h3> {allJobs[0] && allJobs[0].normalized_job_title} </h3>
//

// <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
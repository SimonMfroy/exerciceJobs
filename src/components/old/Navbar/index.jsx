import React from 'react';
import {Link} from 'react-router-dom';
import books from 'data/books';

const Navbar = () =>{




	return(	
		<nav>
		{books.map( (book) =>
			<li key={book.slug}> <Link to={`/book/${book.slug}`}>{book.title}</Link> </li>
		)}
		</nav>
	)

};

export default Navbar

// <nav>
// 			<li> <Link to="/">home</Link> </li>
// 			<li> <Link to="/about">about</Link> </li>
// 			<li> <Link to="/documentation">documentation</Link> </li>
// 		</nav>
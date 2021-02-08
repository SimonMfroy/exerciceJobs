 import React, { useState, useEffect } from 'react';
 import { useParams } from 'react-router-dom';
 import books from 'data/books';

const Book = () => {

	const { bookSlug } = useParams();
	const [currentBook, setCurrentBook] = useState(undefined);

	useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])


	return(
		<div>
			{currentBook &&
				<div>
					<h2> {currentBook.title} </h2>
					<p> {currentBook.description} </p>
					<h3>{currentBook.author}</h3>
				</div>
			}
		</div>

		)
};

export default Book
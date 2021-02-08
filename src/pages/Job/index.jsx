import React, { useState, useEffect } from 'react';
 import { useParams } from 'react-router-dom';
 import {Link} from 'react-router-dom';

const Job = () => {

	const { jobSlug } = useParams();
	const [job, setJob] = React.useState("");
	const [skill, setSkill] = React.useState("");
	//const [currentBook, setCurrentBook] = useState(undefined);

	// useEffect(() => {
 //    const foundBook = books.find((book) => book.slug === jobSlug);
 //    setCurrentBook(foundBook);
 //  }, [jobSlug])

 console.log(jobSlug);

 const searchJob = () => {
	fetch(`http://api.dataatwork.org/v1/jobs/${jobSlug}/related_skills`) // http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=1st
	.then((response)=>response.json())
	.then((response)=>{
		console.log(response);
		!response.error && setJob(response);
		!response.error && setSkill(response.skills);
	});
}
//searchJob();

console.log("job : ",job);
console.log("skill : ",skill)

React.useEffect(() => {
	searchJob();
}, []);

	return(
		<div>
			<h2> Nom du poste : </h2>
			 {job && <h3>{job.job_title} </h3>}

			<h2> Compétences : </h2>
			{skill && <ul>
				<li key={skill[0].skill_name}> <Link to={`/skill/${skill[0].skill_name}`}>{skill[0].skill_name}</Link> </li>
				<li key={skill[1].skill_name}> <Link to={`/skill/${skill[1].skill_name}`}>{skill[1].skill_name}</Link> </li>
				<li key={skill[2].skill_name}> <Link to={`/skill/${skill[2].skill_name}`}>{skill[2].skill_name}</Link> </li>
			</ul>}

		</div>

		)
};

export default Job


// {currentBook &&
// 				<div>
// 					<h2> {currentBook.title} </h2>
// 					<p> {currentBook.description} </p>
// 					<h3>{currentBook.author}</h3>
// 				</div>
// 			}
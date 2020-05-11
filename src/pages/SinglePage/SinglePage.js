
import React, { useState, useEffect } from "react";
import "./SinglePage.css";
import axios from "axios";
import { useParams } from "react-router-dom";


import Experience from '../../components/Experience';
import AlertWithMessage from "../../components/AlertWithMessage";

const EXP_ENDPOINT = "http://localhost:8000/experience/";

const SinglePage = () => {
	const [loadedExp, setLoadedExp] = useState();
	const [failedDelete, setFailedDelete] = useState(false);
	let { postId } = useParams();

	//delete single post from the browser and database
	const deleteHandler = (id) => {
		axios.delete(EXP_ENDPOINT + id)
			.then((response) => {
				console.log(response);

				if (response.status === 204) {
					setFailedDelete(true);
				} else {
					setLoadedExp("");
				}
			});
	};

	//redirect to landing page and update the page by refreshing
	const forceReload = () => {
		window.location.pathname = "/landing-page"; // Do not hardcode hostname
	};

	useEffect(() => {
		if (loadedExp) { // avoid using negative condition when possible
			return;
		} // reduce amount of indentation when possible

		axios
			.get(EXP_ENDPOINT + postId)
			.then(response => {
				setLoadedExp(response.data);
			});
	});

	if (postId) {
		return <h1>Loading...</h1>;
	}

	if (failedDelete) {
		return <AlertWithMessage message="Experience not Deleted"/>;
	} 
	
	if (loadedExp) {
		return <Experience loadedExp={loadedExp} deleteHandler={deleteHandler}/>;
	} else {
		return  <AlertWithMessage message="Successfully deleted experience" forceReload={forceReload}/>
	}
};

export default SinglePage;

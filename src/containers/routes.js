/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import Container from "./Container";
import Home from 'components/pages/Home/Home';

module.exports = (
	<Router>
		<Route path="/" component={Container}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
);

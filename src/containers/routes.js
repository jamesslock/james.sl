/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import Container from "./Container";
import Home from 'components/pages/Home/Home';
import About from 'components/pages/About/About';
import Post from 'components/pages/Writing/Post';
import NightclubPhotography from 'components/pages/Writing/NightclubPhotography.js';

module.exports = (
	<Router>
		<Route path="/" component={Container}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />

			<Route path="post" component={Post} />
			<Route path="writing/a-foray-into-nightclub-photography" component={NightclubPhotography} />
		</Route>
	</Router>
);

/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute, Redirect} from "react-router";

// Container
import Container from "./Container";

// Pages
import Home from 'components/pages/Home/Home';
import About from 'components/pages/About/About';
import Writing from 'components/pages/Writing/Writing';
import Reading from 'components/pages/Reading/Reading';
import NotFound from 'components/pages/NotFound/NotFound';

// Writing
import BypassWifi from 'components/pages/Writing/BypassWifi';
import HacktostartPodcast from 'components/pages/Writing/HacktostartPodcast';
import NomadBackpack from 'components/pages/Writing/NomadBackpack';
import IphonePhotography from 'components/pages/Writing/IphonePhotography';
import BetterTravelPhotos from 'components/pages/Writing/BetterTravelPhotos';
import NewEyes from 'components/pages/Writing/NewEyes';
import TravelWorld from 'components/pages/Writing/TravelWorld';
import NightclubPhotography from 'components/pages/Writing/NightclubPhotography.js';

module.exports = (
	<Router>
		<Route path="/" component={Container}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="reading" component={Reading} /	>


			<Route path="writing">
				<IndexRoute component={Writing} />
				<Route path="bypass-wifi-time-limit-restrictions" component={BypassWifi} />
				<Route path="hack-to-start-podcast-interview" component={HacktostartPodcast} />
				<Route path="my-minimalist-digital-nomad-backpack" component={NomadBackpack} />
				<Route path="getting-back-into-iphone-photography" component={IphonePhotography} />
				<Route path="how-to-take-better-travel-photography-photos" component={BetterTravelPhotos} />
				<Route path="an-old-country-with-new-eyes" component={NewEyes} />
				<Route path="six-months-since-i-sold-everything-and-left-to-travel-the-world" component={TravelWorld} />
				<Route path="a-foray-into-nightclub-photography" component={NightclubPhotography} />
			</Route>

			<Route path='404' component={NotFound} />
		</Route>
	</Router>
);

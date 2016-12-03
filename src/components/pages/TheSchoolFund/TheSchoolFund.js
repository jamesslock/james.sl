import React, {Component} from "react";
import { Link } from 'react-router';

import SchoolCard from './SchoolCard.js';
import VideoAbout from './VideoAbout.js';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import Button       from '../../atoms/Button/Button.js';
import ButtonGroup       from '../../atoms/ButtonGroup/ButtonGroup.js';
import Image    from '../../atoms/Image/Image.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';
import AnimateSlideUp    from '../../atoms/Animate/AnimateSlideUp.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './TheSchoolFund.css';

export default class TheSchoolFund extends Component {

	constructor(props) {
    super(props);
    this.playAboutVideo.bind(this);
    this.state = {
      playAboutVideo: false,
    }
  }

  playAboutVideo() {
    this.setState({ playAboutVideo: !this.state.playAboutVideo });
  }

	componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
		const {playAboutVideo} = this.state;

    return(
      <div>
      	<Container>
       		<Section size="huge" className={s.paddingBottomNone}>

						{ playAboutVideo ?
								<div className={s.relative}>
       						<VideoAbout />
									<button className={s.closeVideo} onClick={ () => this.playAboutVideo() } >
										<div className={s.closeVideoIcon} />
									</button>
								</div>
							:
								null
							}

						<Section size="large" context="secondary">
							<Container className={s.container}>
								<header className={s.header}>
									<AnimateSlideRight>
										<h4 className={s.subHeading}>Advisior</h4>
										<h1 className={s.mainHeading}>The School Fund</h1>
										<h2 className={s.followHeading}>Helping fund scholarships for students who cannot afford to school</h2>
										<p className={s.p}>
											We feature students on our website so donors can crowdfund their scholarships. 100% of individual donations directly fund students’ scholarships. The School Fund ensures that students are enrolled by collecting receipts from schools and visiting partners in the field. We also track students’ progress through school.
										</p>
										<ButtonGroup>
											<Button href="https://theschoolfund.org" target="_blank">Visit The School Fund</Button>
											<Button onClick={ () => this.playAboutVideo() } >
												Watch video
								      </Button>
										</ButtonGroup>
									</AnimateSlideRight>
								</header>
								<div className={s.headerAside}>
									<AnimateSlideUp>
										<SchoolCard percentage={100} initialAnimation={true} strokeWidth={4} />
									</AnimateSlideUp>
       					</div>
							</Container>
						</Section>

						<img src="/img/organisation.jpg"/>

					</Section>
				</Container>

				<Container size="full">
					<div className={s.contentLeft}>
						<img src="/img/organisation1.jpg"/>
					</div>
					<div className={s.contentRight}>
						<img src="/img/organisation1.jpg"/>
					</div>
				</Container>

      </div>
    )
  }
}

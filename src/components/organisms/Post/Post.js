import React, { Component, PropTypes } from 'react';
import Helmet from "react-helmet";

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';

// Import Molecules Components

// Import Organisms Components
import PostHeader from '../PostHeader/PostHeader.js';

import s from './Post.css';

export default class Post extends Component {
  render() {

    const {
      className,
      children,
      title,
			description,
      image,
			url,
      date,
      publishedTime,
			modifiedTime,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      s ? s[s] : null,
      className,
    ].join(' ');


    return (
			<article itemScope itemType="http://schema.org/BlogPosting">
				<Helmet
					title={title}
					meta={[
						{"name": "referrer", "content": "origin"},
						{"name": "description", "content": description},
            {"property": "og:type", "content": "article"},
          	{"property": "og:title", "content": title},
						{"property": "og:description", "content": description},
						{"property": "og:url", "content": `http://james.sl/writing/${url}`},
						{"property": "og:image", "content": `http://james.sl/img/${image}`},
						{"property": "article:published_time", "content": publishedTime},
						{"property": "article:modified_time", "content": modifiedTime},
						{"name": "twitter:card", "content": "summary_large_image"},
						{"name": "twitter:title", "content": title},
						{"name": "twitter:description", "content": description},
						{"name": "twitter:url", "content": `http://james.sl/writing/${url}`},
						{"name": "twitter:image:src", "content": `http://james.sl/img/${image}`},
						{"name": "twitter:label1", "content": "Written by"},
						{"name": "twitter:date1", "content": "James Seymour-Lock"}
          ]}
					link={[
						{"rel": "canonical", "href": `http://james.sl/writing/${url}`}
					]}
					script={[
            {"type": "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
          ]}
				/>
        <Container>
					<PostHeader
						title={title}
						date={date}
						publishedTime={publishedTime}
						image={image}
					/>
				</Container>
				<Container>
    			<Section className={s.root} itemProp="description">
						{children}
					</Section>
    		</Container>
			</article>
    )}
};

Post.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

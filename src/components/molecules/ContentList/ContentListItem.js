import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import s from './ContentList.css';

export default class ContentListItem extends Component {
  render() {

    const {
      className,
      children,
			title,
			link,
			description,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.item,
      s ? s[s] : null,
      className,
    ].join(' ');

    return (

      <li
        className={classNames}
        {...remainingProps}
      >
				<Link to={link}>
					<div className={s.aside}>
						<h2>{title}</h2>
					</div>
					<div className={s.description}>
						<p>{description}</p>
					</div>
				</Link>
      </li>

    )

  }
};

ContentListItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

import React, { Component, PropTypes } from 'react';

import styles from './Flag.css';

export default class Flag extends Component {
  render() {

    const {
      className,
      children,
      varient,
      image,
      imageWidth,
      imageHeight,
    } = this.props;

    const classNames = [
      styles.root,
      varient ? styles[varient] : null,
      styles ? styles[styles] : null,
      className,
    ].join(' ');

    return (
      <div className={classNames}>
        <div className={styles.image}>
          <img src={image} width={imageWidth} height={imageHeight} />
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    )
  }
};

Flag.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  image: PropTypes.string,
  varient: PropTypes.oneOf([
    'inline',
  ]),
};

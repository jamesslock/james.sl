import React, { Component, PropTypes } from 'react';
import Nav from '../../atoms/Nav/Nav.react.js';
import NavItem from '../../atoms/NavItem/NavItem.react.js';
import Button from '../../atoms/Button/Button.react.js';

import styles from './Navigation.css';

// Create menu items with apropriate button type
const NavigationItem = React.createClass({
    render: function(){
      return (
          <NavItem>
            <Button varient={this.props.varient} size={this.props.size} context={this.props.context} href={this.props.url}>{this.props.name}</Button>
          </NavItem>
      );    
    }
});

// Create Nav item
const NavigationBuild = React.createClass({
    render: function(){

      const {
        className,
        children,
      } = this.props;

      const classNames = [
        styles.root,
        styles ? styles[styles] : null,
        className,
      ].join(' ');

      return (
          <Nav varient="inline" className={classNames}>
            {this.props.mainNavigation.map(function(navigationData) {
              return (
                <NavigationItem
                  url={navigationData.url}
                  name={navigationData.name}
                  type={navigationData.type}
                  context={navigationData.context}
                  varient={navigationData.varient}
                  size={navigationData.size}
                  key={navigationData.name}
                />
              );
            })}

            {children}
          </Nav>
      );
    }
});

export default class Navigation extends Component {

  render() {

    const {
      className,
      children,
      navigationData,
    } = this.props;

    return (
        <NavigationBuild className={className} mainNavigation={navigationData}>
          {children}
        </NavigationBuild>
    )
  }
};

Navigation.propTypes = {
  className: PropTypes.string,
};

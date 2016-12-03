import React from 'react'
import styled, { css } from 'styled-components'


const Container = styled.div`
  /* Root styles */
  margin: auto;
  padding: 0 80px 0 10%;

  &:before,
  &:after {
      content: "";
      display: table;
  }
  &:after {
      clear: both;
  }

  ${props => props.full && css`
    /* full width container */
    padding: 0 20px;
  `}
  ${props => props.inner && css`
    /* Internal container */
    padding: 0 10%;
  `}
  ${props => props.small && css`
    /* Small container */
    max-width: 60%;
  `}
  ${props => props.left && css`
    /* Pull container left */
    margin: 0;
    padding: 0;
  `}
  ${props => props.right && css`
    /* Pull container right */
    float: right;
    margin: 0;
    padding: 0;
  `}
`;

export default Container;
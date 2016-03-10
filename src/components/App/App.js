import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header/Header';
import Splash from '../Splash/Splash';
import Message from '../Message/Message';
import ImageVenn from '../ImageVenn/ImageVenn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Treemap from '../Treemap/Treemap';

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Splash />
      </div>
    );
  }
}

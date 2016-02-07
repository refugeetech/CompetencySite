import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header/Header';
import ImageVenn from '../ImageVenn/ImageVenn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Treemap from '../Treemap/Treemap';

@CSSModules(styles)
export class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <TwoColumn />
        <ImageVenn title="ADMINISTRATION & EKONOMI" />
        <Treemap title="Hälsa och sjukvård"/>
        <ImageVenn title="HOTELL & RESTAURANG" />
      </div>
    );
  }
}

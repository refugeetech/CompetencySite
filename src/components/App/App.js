import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header/Header';
import ImageVenn from '../ImageVenn/ImageVenn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Treemap from '../Treemap/Treemap';

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <TwoColumn />
        <ImageVenn title="ADMINISTRATION & EKONOMI" />
        <Treemap
          colors={[
            "#caa4b8",
            "#cc669c" ,
            "#c46c9b",
            "#a1356f",
            "#8a2e5f",
            "#892c5d"
          ]}
          title="Hälsa och sjukvård"/>
        <ImageVenn title="HOTELL & RESTAURANG" />
        <Treemap
          colors={[
            "#cae000",
            "#a5b800" ,
            "#93a300",
            "#6e7a00",
            "#5c6600",
            "#5b6500"
          ]}
          title="Hälsa och sjukvård"/>
      </div>
    );
  }
}

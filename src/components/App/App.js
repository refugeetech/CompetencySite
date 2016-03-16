import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignedUp from '../SignedUp/SignedUp';
import Splash from '../Splash/Splash';
import SelectBusiness from '../SelectBusiness/SelectBusiness';
import Message from '../Message/Message';
import ImageVenn from '../ImageVenn/ImageVenn';
import TwoColumn from '../TwoColumn/TwoColumn';
import Treemap from '../Treemap/Treemap';

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div className="container" styleName="app">
        <Header />
        <div styleName="content">
          <Splash />
          <SignedUp />
        </div>
        <Footer />
      </div>
    );
  }
}

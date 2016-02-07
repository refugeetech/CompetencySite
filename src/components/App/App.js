import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header/Header';
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
        <TwoColumn />
        <Message message="Below you find statistics on all registered competencies compared to the corresponding available jobs in Arbetsförmedlingen." />
        <ImageVenn
          available="1376"
          image="url(/static/images/economy.jpg)"
          matched="432"
          title="ADMINISTRATION JOBS (NOT LIVE YET)" />
        <Treemap
          colors={[
            "#caa4b8",
            "#cc669c" ,
            "#c46c9b",
            "#a1356f",
            "#8a2e5f",
            "#892c5d"
          ]}
          data={[
            {label: "Receptionist", value: 234},
            {label: "Insurance", value: 17},
            {label: "Accountant", value: 73},
            {label: "Other", value: 3},
            {label: "Accountant", value: 354},
            {label: "Logistics", value: 13},
            {label: "Statistics", value: 234},
            {label: "CEO", value: 37},
            {label: "Controller", value: 124},
            {label: "Lawyers", value: 45},
            {label: "Copywriter", value: 10}
          ]}/>
        <ImageVenn
          available="35476"
          image="url(/static/images/hotel.jpg)"
          matched="1535"
          title="HOTEL AND RESTAURANTS (NOT LIVE YET)" />
        <Treemap
          colors={[
            "#cae000",
            "#a5b800" ,
            "#93a300",
            "#6e7a00",
            "#5c6600",
            "#5b6500"
          ]}
          data={[
            {label: "Barista", value: 234},
            {label: "Cold Buffet", value: 17},
            {label: "Other", value: 3},
            {label: "Chef", value: 354},
            {label: "Croupier", value: 13},
            {label: "Bartender", value: 234},
            {label: "Hotel Receptionist", value: 37},
            {label: "Head waiter", value: 124},
            {label: "Pizza Bakers", value: 45},
            {label: "Converence Host", value: 15},
            {label: "Dietary Economics", value: 26},
            {label: "Helpers in Restaurants", value: 152},
            {label: "Receptionist", value: 35}
          ]}/>
      </div>
    );
  }
}

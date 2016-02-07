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
        <Message message="Här nedan ser du statistik på vilka kompetenser som finns i appen, gentemot vilka jobb som finns lediga idag." />
        <ImageVenn
          available="1376"
          image="url(/static/images/economy.jpg)"
          matched="432"
          title="ADMINISTRATION & EKONOMI" />
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
            {label: "Skadereglerare", value: 17},
            {label: "Revisor", value: 73},
            {label: "Övrigt", value: 3},
            {label: "Redovisning", value: 354},
            {label: "Logistiker", value: 13},
            {label: "Statistiker", value: 234},
            {label: "VD", value: 37},
            {label: "Controller", value: 124},
            {label: "Advokat", value: 45},
            {label: "Copywriter", value: 10}
          ]}
          title="Hälsa och sjukvård"/>
        <ImageVenn
          available="35476"
          image="url(/static/images/hotel.jpg)"
          matched="1535"
          title="HOTELL & RESTAURANG" />
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
            {label: "Kallskänka", value: 17},
            {label: "Övrigt", value: 3},
            {label: "Kock", value: 354},
            {label: "Croupier", value: 13},
            {label: "Bartender", value: 234},
            {label: "Hotellreceptionist", value: 37},
            {label: "Husfru", value: 124},
            {label: "Pizzabagare", value: 45},
            {label: "Konferensvärd", value: 15},
            {label: "Kostonom", value: 26},
            {label: "Köksbiträde", value: 152},
            {label: "Receptionist", value: 35}
          ]}
          title="Hälsa och sjukvård"/>
      </div>
    );
  }
}

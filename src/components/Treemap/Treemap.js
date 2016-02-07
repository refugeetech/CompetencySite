import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Treemap.css';
import { Treemap as D3Treemap } from 'react-d3'

@CSSModules(styles)
export default class Treemap extends Component {
  static propTypes = {
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string
  };

  static defaultProps = {
    height: 400,
    width: 600,
    title: 'Treemap'
  };

  render () {
    return (
      <D3Treemap
        data={treemapData}
        width={this.props.width}
        height={this.props.height}
        textColor="#484848"
        fontSize="10px"
      />
    );
  }
}

var treemapData = [
  {label: "Administration, ekonomi, juridik", value: 5000},
  {label: "Bygg och anläggning", value: 4000},
  {label: "Chefer och verksamhetsledare", value: 3500},
  {label: "Data/IT", value: 2000},
  {label: "Hantverksyrken", value: 1400},
  {label: "Hotell, restaurang, storhushåll", value: 800},
  {label: "Hälso- och sjukvård", value: 130},
  {label: "Industriell tillverkning", value: 80}
];

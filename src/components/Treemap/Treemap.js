import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Treemap.css';
import d3, {Treemap} from 'react-d3'

@CSSModules(styles)
export default class CompetencyTreemap extends Component {
  static propTypes = {
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    height: 400,
    width: 600
  };

  render () {
    return (
      <Treemap
        data={treemapData}
        width={this.props.width}
        height={this.props.height}
        textColor="#484848"
        fontSize="10px"
        title="Treemap"
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
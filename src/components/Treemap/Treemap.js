import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Treemap.css';
import { Treemap as D3Treemap } from 'react-d3'

@CSSModules(styles)
export default class Treemap extends Component {
  constructor (props) {
    super(props);

    this.state = {
      width: 600
    };

    this._handleResize = this._handleResize.bind(this);
  }

  componentDidMount () {
    this._handleResize();

    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._handleResize);
  }

  static propTypes = {
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string
  };

  static defaultProps = {
    height: 400,
    width: 1280,
    title: 'Treemap'
  };

  _handleResize () {
   this.setState({
     width: window.innerWidth - 17
   });
  }

  render () {
    return (
      <D3Treemap
        data={treemapData}
        width={this.state.width}
        height={this.props.height}
        textColor="#fff"
        fontSize="13px"
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

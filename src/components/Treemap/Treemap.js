import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Treemap.css';
import d3 from 'd3';
import D3Treemap from './treemap/D3Treemap'

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
     width: document.body.clientWidth
   });
  }

  render () {
    const {
      colors,
      data
    } = this.props;

    let treemapColors;

    if (colors) {
      treemapColors = d3.scale.ordinal()
        .domain([0,1,2,3,4,5])
        .range(colors)
    }

    var labeledData = data.map(d => {
      return {
        ...d,
        sublabel: d.value
      }
    })

    return (
      <D3Treemap
        colors={treemapColors}
        data={labeledData}
        width={this.state.width}
        height={this.props.height}
        textColor="#fff"
        fontSize="13px"
      />
    );
  }
}

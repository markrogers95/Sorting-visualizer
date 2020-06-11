import React, { Component} from 'react';
import { connect } from "react-redux";
import "./VisualizerMain.css";

class VisualizerMain extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const {array,
               swappingElements,
               compareElements,
               currentSorted,
               merge,} = this.props;

        const width = Math.floor(((0.8 * window.innerWidth) - 200 - array.length) / (array.length) ) - 1;
        const arrWidth = `${width}px`


        return (
            <div id="wrap" className="wrap">
              { array.map((value, idx) => {
                  const backgroundColor = swappingElements.includes(idx) ?
                  "#F603A3" : compareElements.includes(idx) ?
                  "#39ff14" : currentSorted.includes(idx) ?
                  "#61dafb" : /*merge.includes(idx) ?
                  "#FFFFFF" : */"#ff4f00";

                return (
                    <div
                        className="array"
                        key={idx}
                        style={{height: `${value}px`, 
                        width: arrWidth,
                        backgroundColor: backgroundColor}}>
                    </div>
                )
              })
              }
            </div>
        );
    }
}

const mapStateToProps = ({
    array,
    compareElements,
    swappingElements,
    currentSorted,
    merge,
}) =>
({array,
  compareElements,
  swappingElements,
  currentSorted,
  merge,});

const mapDispatchToProps = () => dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(VisualizerMain);
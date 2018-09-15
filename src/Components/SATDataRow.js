import React, { Component } from 'react';

class SATDataRow extends Component {
  render() {
  	
  	// The row indices map as follows:
    // 0 -> State name
    // 1 -> Average SAT Score
    // 2 -> Average New SAT Score
    // 3 -> Raw Average SAT Score
    // 4 -> SAT participation rate (percentage)
    return (
	  <tr>
	    <td>{this.props.dataRow[0]}</td>
	    <td>{this.props.dataRow[1]}</td>
	    <td>{this.props.dataRow[2]}</td>
	    <td>{this.props.dataRow[3]}</td>
	    <td>{Math.round(this.props.dataRow[4]*100)}%</td>
	  </tr>
	);
  }
}
export default SATDataRow;

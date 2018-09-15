import React, { Component } from 'react';
import sorticon from './sort.svg';

class SATHeaderItem extends Component {
	render() {
      return (
      	<th>
      	  {this.props.headerText} <img src={sorticon} alt="Sort ascending" onClick={() => {this.props.sortByColumn(this.props.headerText)}}/>
      	</th>
      	)
	}
}
export default SATHeaderItem;

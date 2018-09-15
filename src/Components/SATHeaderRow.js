import React, { Component } from 'react';
import SATHeaderItem from './SATHeaderItem';

class SATHeaderRow extends Component {
  render() {
    let headerItems = this.props.headerRow.map(headerText => {
      return (
        <SATHeaderItem key={headerText} headerText={headerText} sortByColumn={this.props.sortByColumn}/>
      );
    });

	return (
	  <tr>
        {headerItems}
	  </tr>
	);
  }
}
export default SATHeaderRow;

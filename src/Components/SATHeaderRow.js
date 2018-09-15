import React, { Component } from 'react';
import SATHeaderItem from './SATHeaderItem';

/**
 * This class iterates through each header item, and renders each.
 */
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

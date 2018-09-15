import React, { Component } from 'react';
import SATDataRow from './SATDataRow';
import SATHeaderRow from './SATHeaderRow';
import './Table.css';

/**
 * This class defines the entire table component: header and each data row.
 */
class Table extends Component {
  render() {
    /**
     * Given the current page to which a user has paginated, render the corresponding data rows.
     */
    let startIndex = (this.props.currentPage-1)*this.props.maxResultsPerPage;
    let endIndex = Math.min(this.props.SATResultData["data"].length+1, this.props.currentPage*this.props.maxResultsPerPage);
    let dataForPage = this.props.SATResultData["data"].slice(startIndex, endIndex);
    let dataRows = dataForPage.map(dataRow => {
      return (
        <SATDataRow key={dataRow[0]} dataRow={dataRow}/>
      );
    });

    return (
      <table>
        <thead>
          <SATHeaderRow headerRow={this.props.SATResultData["headers"]} sortByColumn={this.props.sortByColumn}/>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>
    );
  }
}
export default Table;

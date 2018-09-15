import React, { Component } from 'react';
import Table from './Components/Table';
import Paginator from './Components/Paginator';
import ResultsPerPage from './Components/ResultsPerPage';
import SATResultData from './SATResults.js';
import orderBy from 'lodash/orderBy';

import './App.css';

const flipSortOrder = {
  'asc': 'desc',
  'desc': 'asc'
};

class App extends Component {
  paginateLeft = () => {
    let newPageNum = this.state.currentPage - 1;
    if (this.state.currentPage === 1) {
      newPageNum = this.state.maxNumPages;
    }

    this.setState({
      'currentPage': newPageNum
    });
  }

  paginateRight = () => {
    let newPageNum = this.state.currentPage + 1;
    if (this.state.currentPage === this.state.maxNumPages) {
      newPageNum = 1;
    }

    this.setState({
      'currentPage': newPageNum
    });
  }

  sortByColumn = (headerText) => {
    let index = this.state.SATResultData["headers"].indexOf(headerText);
    let newSortOrder = flipSortOrder[this.state.sortOrder];
    let orderedData = this.state.SATResultData;
    orderedData["data"] = orderBy(this.state.SATResultData["data"], index, newSortOrder);

    this.setState({
      'sortOrder': newSortOrder,
      'SATResultData': orderedData
    });
  }

  updateMaxResultsPerPage = (newMaxResultsPerPage) => {
    if (newMaxResultsPerPage >= 1 && newMaxResultsPerPage <= this.state.SATResultData["data"].length) {
      this.setState({
        maxResultsPerPage: newMaxResultsPerPage,
        maxNumPages: Math.ceil(SATResultData["data"].length / newMaxResultsPerPage),
        currentPage: 1
      });
    }
    else {
      this.setState({
        maxNumPages: -1
      });
    }
  }

  constructor() {
    super();
    this.state = {
      SATResultData: {},
      maxResultsPerPage: 10,
      currentPage: 1,
      maxNumPages: -1,
      columnToSort: '',
      sortOrder: 'desc'
    }
  }

  componentWillMount() {
    // In real life, I would add code below this comment to fetch the
    // SAT result data from an API. But for now, set the data statically.
    this.setState({
      SATResultData: SATResultData,
      maxNumPages: Math.ceil(SATResultData["data"].length / this.state.maxResultsPerPage)
    });
  }

  render() {
    return (
      <div>
        <header>
          <Paginator currentPage={this.state.currentPage} maxNumPages={this.state.maxNumPages} paginateLeft={this.paginateLeft} paginateRight={this.paginateRight}/>
        </header>
        <main>
          <ResultsPerPage updateMaxResultsPerPage={this.updateMaxResultsPerPage} maxResultsPerPage={this.state.maxResultsPerPage} numSATResults={this.state.SATResultData["data"].length} maxNumPages={this.state.maxNumPages}/>
          <Table SATResultData={this.state.SATResultData} sortByColumn={this.sortByColumn} currentPage={this.state.currentPage} maxResultsPerPage={this.state.maxResultsPerPage}/>
        </main>
      </div>
    );
  }
}

export default App;

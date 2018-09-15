import React, { Component } from 'react';
import paginateLeftIcon from './chevron-left.svg';
import paginateRightIcon from './chevron-right.svg';

import './Paginator.css';

class Paginator extends Component {
	render () {
		return (
      <h1 className="header-group">2016 SAT Scores
        <span className="right-align">
          <img src={paginateLeftIcon} alt="Paginate left" onClick={() => {this.props.paginateLeft()}}/>
          Page {this.props.currentPage} of {this.props.maxNumPages}
          <img src={paginateRightIcon} alt="Paginate right" onClick={() => {this.props.paginateRight()}}/>
        </span>
      </h1>
		);
	}
}
export default Paginator;

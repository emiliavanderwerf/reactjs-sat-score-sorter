import React, { Component } from 'react';

/**
 * This class renders the input box for the user to set the max number of results
 * per page, and displays a warning if the user enters a number out of range.
 */
class ResultsPerPage extends Component {
	constructor(props) {
		super(props);
		this.state = {"hidden": ""};
		if (this.props.maxNumPages >= 1 && this.props.maxNumPages <= this.props.numSATResults)
		{
            this.state["hidden"] = "hidden";
		}
	}

    /**
     * Un-hides a warning message if a user entered a max number of results that
     * is out of range.
     *
     * @param {number} newMaxResultsOnPage: The number entered by the user
     * @param {number} numSATResults: The number of SAT result data rows
     */
    isHidden = (newMaxResultsOnPage, numSATResults) => {
    	let isHidden = "";
        if (newMaxResultsOnPage >= 1 && newMaxResultsOnPage <= numSATResults) {
            isHidden = "hidden";
        }

        return isHidden;
    }

    render() {
    	return (
    		<div>
              <h2>
                Set max results per page: <input type="number" min="1" max={this.props.numSATResults} defaultValue={this.props.maxResultsPerPage} onChange={event => {this.props.updateMaxResultsPerPage(event.target.value)}}/>
                <span id="results-per-page-warning" className={this.isHidden(this.props.maxNumPages, this.props.numSATResults)}><strong>Warning:</strong> Please enter a range between 1 and {this.props.numSATResults}</span>
              </h2>
            </div>
    	);
    }
}
export default ResultsPerPage;

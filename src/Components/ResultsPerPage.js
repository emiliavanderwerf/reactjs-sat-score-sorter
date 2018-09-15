import React, { Component } from 'react';

class ResultsPerPage extends Component {
	constructor(props) {
		super(props);
		this.state = {"hidden": ""};
		if (this.props.maxNumPages >= 1 && this.props.maxNumPages <= this.props.numSATResults)
		{
            this.state["hidden"] = "hidden";
		}
	}

    isHidden = (maxNumPages, numSATResults) => {
    	let isHidden = "";
        if (maxNumPages >= 1 && maxNumPages <= numSATResults) {
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

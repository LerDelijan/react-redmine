import React, { Component } from "react";
import { connect } from 'react-redux';
import { load } from "../actions/issue_actions";
import { bindActionCreators } from "redux";

class Desc extends Component {

  componentDidMount = () => {
    this.props.load();
  };

  render() {
    let result = this.props.issues;
    let startDate = Date.parse(result.created_on);
    let updateDate = Date.parse(result.updated_on)
    let startDays = Math.round((Date.now() - startDate)/(1000*60*60*24));
    let updateDays = Math.round((Date.now() - updateDate)/(1000*60*60*24))
    return (
      <div>
        <div className="row border-bottom pt-3">
          <div className="h4 font-weight-bold col-sm">{result.tracker.name}{' #'}{result.id}</div>
        </div>
        <div className="row pt-3">
          <div className="h5 col-sm">{result.subject}</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm">Added by <u>{result.author.name}</u> {startDays} day(s) ago. Updated {updateDays} day(s) ago.</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm font-weight-bold">Status:</div>
          <div className="h6 col-sm text-left">{result.status.name}</div>
          <div className="h6 col-sm font-weight-bold">Start Date:</div>
          <div className="h6 col-sm text-left">{result.start_date}</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm font-weight-bold">Priority:</div>
          <div className="h6 col-sm text-left">{result.priority.name}</div>
          <div className="h6 col-sm font-weight-bold">Due Date:</div>
          <div className="h6 col-sm text-left">{result.due_date}</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm font-weight-bold">Assignee:</div>
          <div className="h6 col-sm text-left">{result.assigned_to.name}</div>
          <div className="h6 col-sm font-weight-bold">Done Ratio:</div>
          <div className="h6 col-sm text-left">{result.done_ratio}</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm font-weight-bold">Estimared Time:</div>
          <div className="h6 col-sm">{result.estimated_hours}</div>
          <div className="h6 col-sm font-weight-bold">Total Estimared Time:</div>
          <div className="h6 col-sm text-left">{result.total_estimated_hours}</div>
        </div>
        <div className="row pt-3 border-bottom">
          <div className="h6 col-sm font-weight-bold">Spent Hours:</div>
          <div className="h6 col-sm">{result.spent_hours}</div>
          <div className="h6 col-sm font-weight-bold">Total Spent Hours:</div>
          <div className="h6 col-sm text-left">{result.total_spent_hours}</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm font-weight-bold">Description</div>
        </div>
        <div className="row pt-3">
          <div className="h6 col-sm">{result.description}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  issues: state.issues.find(issue => {
    return issue.id === parseInt((props.match.params.id), 10)
  })
});
const mapDispatchToProps = dispatch => bindActionCreators(
  { load },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Desc);

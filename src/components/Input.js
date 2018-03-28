import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dataSearch } from '../actions/issue_actions'

class Input extends Component {
  state = {
    parameters: {
      status_id: '',
      issue_id: '',
      project_id: '',
      tracker_id: '',
      priority_id: ''
    }
  };

  filter = () => {
    let parameters = this.state.parameters;
    let filter = { parameters: {} };
    for (let key in parameters) {
      if (parameters[key] !== '') {
        filter.parameters[key] = parameters[key];
      }
    };
    return filter;
  }

  changeText = (name, e) => {
    this.setState(
      { parameters: { [name]: e.target.value } },
      () => this.props.dataSearch(this.filter())
    );
  };

  clear = () => {
    this.setState(
      { parameters: {} },
      () => this.props.dataSearch(this.filter())
    );
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Tracker</span>
          </div>
          <select
            className="form-control"
            value={this.state.parameters.tracker_id}
            onChange={(e) => { this.changeText('tracker_id', e) }}>
            <option value="1">Bug</option>
            <option value="2">Feature</option>
            <option value="3">Support</option>
          </select>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Status</span>
          </div>
          <select
            className="form-control"
            value={this.state.parameters.status_id}
            onChange={(e) => { this.changeText('status_id', e) }}>
            <option value="1">New</option>
            <option value="2">In Progress</option>
            <option value="3">Resolved</option>
            <option value="4">Feedback</option>
            <option value="5">Closed</option>
            <option value="6">Rejected</option>
          </select>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Issue Id</span>
          </div>
          <input
            className="form-control"
            placeholder="Search"
            type="text"
            value={this.state.parameters.issue_id}
            onChange={(e) => { this.changeText('issue_id', e) }} />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Priority</span>
          </div>
          <select
            className="form-control"
            value={this.state.parameters.priority_id}
            onChange={(e) => { this.changeText('priority_id', e) }}>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
            <option value="4">Urgent</option>
            <option value="5">Immediate</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.clear}>Clear</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col py-3 border-bottom text-center font-weight-bold">#</div>
            <div className="col py-3 border-bottom font-weight-bold">Project</div>
            <div className="col py-3 border-bottom font-weight-bold">Tracker</div>
            <div className="col py-3 border-bottom font-weight-bold">Status</div>
            <div className="col py-3 border-bottom font-weight-bold">Priority</div>
            <div className="col py-3 border-bottom font-weight-bold">Subject</div>
            <div className="col py-3 border-bottom font-weight-bold">Assignee</div>
            <div className="col py-3 border-bottom font-weight-bold">Updated</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { dataSearch },
  dispatch
);

export default connect(null, mapDispatchToProps)(Input);
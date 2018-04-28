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
      { parameters: { ...this.state.parameters, [name]: e.target.value } },
      () => this.props.dataSearch(this.filter())
    );
  };

  clear = () => {
    this.setState(
      {
        parameters: {}
      },
      () => this.props.dataSearch(this.filter())
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.clear}>
          <div className="form-row py-2">

            <div className="form-group col-md-3">
              <label>Tracker</label>
              <select
                className="custom-select form-control"
                value={this.state.parameters.tracker_id}
                onChange={(e) => { this.changeText('tracker_id', e) }}>
                <option value=""></option>
                <option value="1">Bug</option>
                <option value="2">Feature</option>
                <option value="3">Support</option>
              </select>
            </div>

            <div className="form-group col-md-3">
              <label>Status</label>
              <select
                className="custom-select form-control"
                value={this.state.parameters.status_id}
                onChange={(e) => { this.changeText('status_id', e) }}>
                <option value="" ></option>
                <option value="1">New</option>
                <option value="2">In Progress</option>
                <option value="3">Resolved</option>
                <option value="4">Feedback</option>
                <option value="5">Closed</option>
                <option value="6">Rejected</option>
              </select>
            </div>

            <div className="form-group col-md-3">
              <label>Issue ID</label>
              <input
                className="form-control"
                placeholder="Search"
                type="text"
                value={this.state.parameters.issue_id}
                onChange={(e) => { this.changeText('issue_id', e) }} />
            </div>

            <div className="form-group col-md-3">
              <label>Priority</label>
              <select
                className="custom-select form-control"
                value={this.state.parameters.priority_id}
                onChange={(e) => { this.changeText('priority_id', e) }}>
                <option value=""></option>
                <option value="1">Low</option>
                <option value="2">Normal</option>
                <option value="3">High</option>
                <option value="4">Urgent</option>
                <option value="5">Immediate</option>
              </select>
            </div>

            <div className="btn-group col">
              <input className="btn btn-outline-dark" type="submit" value="Clear" />
            </div>

          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { dataSearch },
  dispatch
);

export default connect(null, mapDispatchToProps)(Input);
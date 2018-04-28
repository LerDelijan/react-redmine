import React, { Component } from "react";
import Issue from './Issue';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './Input';
import { load } from '../actions/issue_actions'

class List extends Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div>
        <div className="shadow p-3 mb-5 rounded">
          <Input />
        </div>
        <div className="container">
          <div className="row shadow-sm">
            <div className="col-md-1 py-3 border-bottom text-center font-weight-bold panel">#</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Project</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Tracker</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Status</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Priority</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Subject</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Assignee</div>
            <div className="col py-3 border-bottom font-weight-bold panel">Updated</div>
          </div>
        </div>
        <div className="shadow p-3 mb-5 rounded">
          {this.props.issues.length > 0 ?
            this.props.issues.map((issue, i) => (
              <Issue key={issue.id} issue={issue} />
            )) : <p><i> No issues </i></p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  issues: state.issues
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { load },
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(List);
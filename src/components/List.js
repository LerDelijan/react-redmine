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
        <div>
          <Input />
        </div>
        <div>
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
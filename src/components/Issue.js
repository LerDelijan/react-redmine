import React, { Component } from "react";
import { Link } from "react-router-dom";

class Issue extends Component {

  render() {
    let result = this.props.issue;
    return (
      <Link to={`/issue/${result.id}`} className="nav-link">
        <div className="row">
          <div className="col-sm text-center">{result.id}</div>
          <div className="col-sm">{result.project.name}</div>
          <div className="col-sm">{result.tracker.name}</div>
          <div className="col-sm">{result.status.name}</div>
          <div className="col-sm">{result.priority.name}</div>
          <div className="col-sm">{result.subject}</div>
          <div className="col-sm">{result.assigned_to.name}</div>
          <div className="col-sm">{result.updated_on}</div>
        </div>
      </Link>
    );
  }
}

export default Issue;
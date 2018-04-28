import React, { Component } from "react";
import { Link } from "react-router-dom";

class Issue extends Component {


  render() {
    let result = this.props.issue;
    let assignee = result.assigned_to != null ? result.assigned_to.name : "None";
    let updateDate = new Date(Date.parse(result.updated_on));
    let updateDateFormat = `${updateDate.getFullYear()}-${updateDate.getMonth()}-${updateDate.getDay()}`
    return (
      <Link to={`/issue/${result.id}`} className="list-group-item-action text-dark p-2">
        <div className="row">
          <div className="col-md-1 text-center">{result.id}</div>
          <div className="col-sm">{result.project.name}</div>
          <div className="col-sm">{result.tracker.name}</div>
          <div className="col-sm">{result.status.name}</div>
          <div className="col-sm">{result.priority.name}</div>
          <div className="col-sm text-truncate">{result.subject}</div>
          <div className="col-sm">{assignee}</div>
          <div className="col-sm">{updateDateFormat}</div>
        </div>
      </Link>
    );
  }
}

export default Issue;
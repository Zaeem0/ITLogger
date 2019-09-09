import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog } from "../../actions/logActions";
import PropTypes from "prop-types";
import MaterializeJS from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({
  log: { id, attention, message, tech, date },
  deleteLog
}) => {
  const onDelete = () => {
    deleteLog(id);
    MaterializeJS.toast({ html: "Log Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propType = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog }
)(LogItem);

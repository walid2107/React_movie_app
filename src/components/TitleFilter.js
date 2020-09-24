import React from "react";
import { connect } from "react-redux";

import { titleFilter } from "../actions/actions";

const TitleFilter = ({ titleFilter }) => (
  <div className="title-filter">
    <input
      type="text"
      placeholder="Type the serie name to search ..."
      className="title-filter-text"
      onChange={e => titleFilter(e.target.value)}
    />
    <button className="title-filter-button">Search</button>
  </div>
);

//redux
export default connect(
  null,
  { titleFilter }
)(TitleFilter);

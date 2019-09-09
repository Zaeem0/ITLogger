import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import "materialize-css/dist/css/materialize.min.css";
import MaterializeJS from "materialize-css/dist/js/materialize.min.js";
import Logs from "./components/logs/Logs";

const App = () => {
  useEffect(() => {
    MaterializeJS.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;

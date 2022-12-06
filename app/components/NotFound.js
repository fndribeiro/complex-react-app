import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

function NoutFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>Sorry, we cannot find that page!</h2>
        <p className="lead text-muted">
          You can always visit the <Link to="/">homepage</Link> to return!
        </p>
      </div>
    </Page>
  );
}

export default NoutFound;

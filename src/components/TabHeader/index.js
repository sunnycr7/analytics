import React from "react";
import { Link } from "react-router-dom";

const TabHeader = props => {
  return (
    <React.Fragment>
      <Link className={`item ${props.activeOverview}`} to="/">
        Overview
      </Link>
      <Link className={`item ${props.activeBudget}`} to="/">
        Budget
      </Link>
      <Link className={`item ${props.activeExpenses}`} to="/">
        Expenses
      </Link>
      <Link className={`item ${props.activeSales}`} to="/">
        Sales
      </Link>
      <Link className={`item ${props.activeCatalog}`} to="/">
        Catalog
      </Link>
      <Link className={`item ${props.activeReports}`} to="/">
        Reports
      </Link>
      <Link className={`item ${props.activeDashboard}`} to="/">
        Dashboard
      </Link>
    </React.Fragment>
  );
};

export default TabHeader;

import React from "react";

import TabHeader from "../TabHeader";
import DVGraph from "../Visualization/DVGraph/DVGraph";
import SimpleFilter from "../Filter/SimpleFilter/SimpleFilter";
import ExportBtn from "../Export/Export";

import {
  statusOptions,
  initialFilters,
} from "./filters";


class Overview extends React.Component {
  // set initial state of filter dictionary
  state = {
    filters: initialFilters,
  };

  // updates filter column with value
  // column must already be specified in initial filter dictionary
  // value should be a value available in the column's filter dropdown
  // not used here but a good example of how to update filters
  addFilter = (column, value) => {
    let updatedFilters = { ...this.state.filters };
    updatedFilters[column].values.push(value.label);
    this.setState({ filters: updatedFilters });
  };

  // called from the filter component to update the filter dictionary
  // with selected values from dropdown
  handleFilterSelection = (column, selected) => {
    let updatedFilters = { ...this.state.filters };
    updatedFilters[column].values = [];
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(selected))
      updatedFilters[column].values.push(value.label);
    this.setState({ filters: updatedFilters });
  };

  // example of how to pass current selection to other webpages
  // same functionality as export button
  // loops through filters and makes a google search on filters
  analyzeFilters = () => {
    let url = "https://www.google.com/search?q=";
    for (const [key, value] of Object.entries(this.state.filters)) {
      if (value.values.length > 0) {
        url = `${url}${key.toUpperCase()}:+`;
      }
      for (let i of value.values) {
        url = `${url}${i}+`;
      }
    }
    window.open(url);
  };


  render() {
    return (
      <div>
        {/* displays the mock tab header under the main nav bar */}
        {/* <div className="canvas">
          <div className="ui tabular menu">
            <TabHeader activeOverview="active" />
          </div>
        </div>

 

        {/* container for all visualizations */}
        <div>
          <div className="ui grid new-grid">
            <div className="column six wide graph-col">

              {/* data visualization for stacked bar graph */}
              <div className="graph-block graph-dv1">
                <DVGraph
                  path="/shared/GE/GE Analytics"
                  filters={this.state.filters}
                  activeTab="1"
                  showFilter={false}
                  handleFilterSelection={this.handleFilterSelection}
                />
              </div>

              {/* data visualization for termination reason tree graph */}
              <div className="graph-block graph-dv2">
                <DVGraph
                    path="/shared/GE/GE Analytics"
                    filters={this.state.filters}
                    activeTab="2"
                    showFilter={false}
                    handleFilterSelection={this.handleFilterSelection}
                  />
              </div>
            </div>
            <div className="column ten wide graph-col">

              {/* data visualization for line graph */}
              <div className="graph-block graph-dv3">
                <DVGraph
                    path="/shared/GE/GE Analytics"
                    filters={this.state.filters}
                    activeTab="3"
                    showFilter={false}
                    handleFilterSelection={this.handleFilterSelection}
                  />
              </div>

              {/* dashboard that contains a drilldown from department level to employee level */}
              <div className="graph-block graph-bi1">
                <DVGraph
                    path="/shared/GE/GE Analytics"
                    filters={this.state.filters}
                    activeTab="4"
                    showFilter={true}
                    handleFilterSelection={this.handleFilterSelection}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;


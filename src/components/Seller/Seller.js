import React from "react";
import DVGraph from "../Visualization/DVGraph/DVGraph";


class Seller extends React.Component {

  render() {
    return (
      <div>
        {/* container for all visualizations */}
        <div>
          <div className="seller ui grid new-grid">
            <div className="column six wide graph-col">

              {/* data visualization for stacked bar graph */}
              <div className="graph-block graph-dv1">
                <DVGraph
                  path="/shared/GE/GE Analytics"
                  activeTab="1"
                  showFilter={false}
                />
              </div>

              {/* data visualization for termination reason tree graph */}
              <div className="graph-block graph-dv2">
                <DVGraph
                    path="/shared/GE/GE Analytics"
                    activeTab="2"
                    showFilter={false}
                  />
              </div>
            </div>
            <div className="column ten wide graph-col">

              {/* data visualization for line graph */}
              <div className="graph-block graph-dv3">
                <DVGraph
                    path="/shared/GE/GE Analytics"
                    activeTab="3"
                    showFilter={false}
                  />
              </div>

              {/* dashboard that contains a drilldown from department level to employee level */}
              <div className="graph-block graph-bi1">
                <DVGraph
                    path="/shared/GE/GE Analytics"
                    activeTab="4"
                    showFilter={true}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seller;


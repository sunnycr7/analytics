import React from "react";
import Select from 'react-select';

class SimpleFilter extends React.Component {
  
  state = {
    selectedNodes: []
  };
  
  handleFilterSelection = (selectedNodes) => this.setState({selectedNodes: selectedNodes});

  handleFilterClose = () => this.props.handleFilterSelection(this.props.column, this.state.selectedNodes);

  render() {
    return (
          <Select
              isMulti
              isDisabled={this.props.isDisabled}
              defaultValue={this.props.defaultValue}
              name={this.props.name}
              onChange={this.handleFilterSelection}
              onMenuClose={this.handleFilterClose}
              options={this.props.filter}
              closeMenuOnSelect={false}
              className="Select"
              classNamePrefix="select"
              placeholder={`Select ${this.props.name}...`}
            />
    );
  }
}

export default SimpleFilter;

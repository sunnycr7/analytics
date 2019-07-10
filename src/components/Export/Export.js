import React from "react";

class ExportBtn extends React.Component {
  handleExport = () => {
    let url = "https://www.google.com/search?q=";
    for (const [key, value] of Object.entries(this.props.filterDict)) {
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
      <div className="Select Export">
        <button className="ExportBtn" onClick={this.handleExport}>
          Export
        </button>
      </div>
    );
  }
}

export default ExportBtn;

import React from 'react';
import styles from './DVGraph.module.css';
// import required knockout libraries for oac
// eslint-disable-next-line
import knockout from './knockout';


class DVGraph extends React.Component {

    // add event listener to check for data action publish events
    componentDidMount() {
        this.dv.addEventListener('oracle.bitech.dataaction', this.handleDVEvent);
    }

    // remove listener on unmount
    componentWillUnmount() {
        this.dv.removeEventListener('oracle.bitech.dataaction', this.handleDVEvent);
    }

    // handle the event after data action
    // right now we are just logging the event but this is where you could take action
    // based on the content the user selects in the visualization
    handleDVEvent = (event) => {
        console.log(event.detail.payload["context"]);
    }

    render() {

        // initialize the filter array
        let filters = [];

        // loop through the passed filters and to create json object that
        // oracle-dv can read
        for (const [ key, value ] of Object.entries(this.props.filters)) {
            filters.push(
                {
                    "sColFormula": key,
                    "sColName": key,
                    "isDateCol": value.isDate,
                    "sOperator": value.operator,
                    "isNumericCol": value.isNum,
                    "bIsDoubleColumn": value.isDouble,
                    "aCodeValues": [],
                    "aDisplayValues": value.values
                }
            );
        }

        // set the options for the data visualization
        // since we are filtering in the application we will want to keep ShowFilterBar false
        const options = {
            "bDisableMobileLayout": true,
            "bShowFilterBar": this.props.showFilter
        }
        
        return (
            // keep ref of the element for the event listener
            <div  ref={elem => this.dv = elem} className={styles.DVGraph} >
                {/* return visualization with passed parameters */}
                <oracle-dv 
                    project-path={this.props.path}
                    filters={JSON.stringify(filters)}
                    project-options={JSON.stringify(options)}
                    active-page="canvas"
                    active-tab-id={this.props.activeTab}>
                </oracle-dv>
            </div>
        );
    }
}

export default DVGraph;

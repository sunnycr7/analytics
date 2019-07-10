// set filters based on values in filtering column

// set values for PO_STATUS for dropdown filter
export const statusOptions = [
  { value: 'InProgress', label: 'In Progress' },
  { value: 'Open', label: 'Open' },
  { value: 'PENDING', label: 'Pending' }
];

// set initial filters to empty arrays for PO_STATUS
// This gets updated based on the values set in the dropdown filters
export const initialFilters = {
  "PO_STATUS": {
    values: [], 
    isDouble: false,
    isNum: false,
    isDate: false,
    operator: "in"
  }
};

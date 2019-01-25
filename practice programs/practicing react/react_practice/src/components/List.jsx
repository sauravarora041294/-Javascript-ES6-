import React from "react";
const numbers_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function NumberList(props) {
  const num_arr = props.number;
  const list_arr = num_arr.map(item => <li key={item.toString()}>item</li>);
  return <ul>{list_arr}</ul>;
}

class List extends React.Component {
  render() {
    return <NumberList number={numbers_arr} />;
  }
}

export default List;

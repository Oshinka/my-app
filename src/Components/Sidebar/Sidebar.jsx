import React from "react";

const Sidebar = props => {
  return (
    <div className='page-header'>
      <h1><small>{ props.title }</small></h1>
    </div>
  );
};

export default Sidebar;

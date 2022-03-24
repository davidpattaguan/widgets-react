import React from "react";

const ListComponent = (props) => {
  const ListData = props.searchItems.map((item) => {
    return (
      <>
        <div className="list__body">
          <div className="list__title">
            <h1>{item.title}</h1>
          </div>
          <div className="list__body">
            <p>{item.snippet}</p>
          </div>
        </div>
      </>
    );
  });

  return <div>{ListData}</div>;
};

export default ListComponent;

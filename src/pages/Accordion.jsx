import "../pages/accordion-styles.css";
import React from "react";
import { useState } from "react";

const Accordion = ({ accordionItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectedItem = (index) => {
    setActiveItem(index);
  };

  const populateList = accordionItems.map((item, index) => {
    const active = index === activeItem ? "" : "panel";
    return (
      <div key={item.title}>
        <div className="accordion__item " onClick={() => onSelectedItem(index)}>
          <div className="accordion__item__title">
            <h1>{item.title}</h1>
          </div>
          <div className={`accordion__item__desc ${active}`}>
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="accordion">{populateList}</div>;
};

export default Accordion;

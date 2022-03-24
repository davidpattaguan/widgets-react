import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Data Source
import { accordionData } from "./data/accordion-data";
import wikipedia from "./data/wikipedia";

// Components
import Navbar from "./components/navbar/Navbar";
import Accordion from "./pages/Accordion";
import Search from "./pages/Search";

function App() {
  const [accordionItems, setAccordionItems] = useState(accordionData);

  //

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="accordion"
            element={<Accordion accordionItems={accordionItems} />}
          />
          <Route path="search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// import the all  necessary modules,files and styles file.
import React, { useState } from "react";
import RootView from "./Components/RootView";
import "./App.css";

// initial data structure for the tree is gien in the assigement.
const initialData = {
  name: "root",
  children: [
    {
      name: "child1",
      children: [
        { name: "child1-child1", data: "c1-c1 Hello" },
        { name: "child1-child2", data: "c1-c2 JS" },
      ],
    },
    { name: "child2", data: "c2 World" },
  ],
};

const App = () => {
  // state to the manage data and exportData.
  const [data, setData] = useState(initialData);
  const [exportData, setExportData] = useState("");

  // function to create / add a new child to a parent nodes.
  const addChild = (parent) => {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({
      name: "New Child",
      data: "Data",
    });
    setData({ ...data });
  };

  // function to change the name or data of a node.
  const changeTagName = (element, value, shouldUpdate = true) => {
    if (element.data !== undefined) {
      element.data = value;
    } else {
      element.name = value;
    }

    if (shouldUpdate) {
      setData({ ...data });
    }
  };

  // function to handle exporting data to a string.
  const handleExport = () => {
    const exportDataString = JSON.stringify(
      data,
      ["name", "children", "data"],
      2
    );
    setExportData(exportDataString);
  };

  return (
    <div className="app_container">
      {/* render the root tree view and pass three arguments to RootView Components-tag,addchild,changeTagName. */}
      <RootView tag={data} addChild={addChild} changeTagName={changeTagName} />

      {/* button to export data- after clcik button export the all data on dom. */}
      <button className="export_button" onClick={handleExport}>
        Export
      </button>

      {/* display exported data here.*/}
      <div className="export_data">{exportData}</div>
    </div>
  );
};

export default App;

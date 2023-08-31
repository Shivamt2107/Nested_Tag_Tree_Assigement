// import necessary modules and styles files.
import React, { useState } from "react";
import "./RootView.css";

const RootView = ({ tag, addChild, changeTagName }) => {
  // console.log(tag);
  // console.log(addChild);
  // console.log(changeTagName);

  // state to the manage collapsed/expanded view using this hooks.
  const [isCollapsed, setIsCollapsed] = useState(false);

  // function to toggle collapse/expand state.
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`tag ${isCollapsed ? "collapsed" : ""}`}>
      <div className="tag_header">
        {/* button to toggle collapse/expand use this symbol given in assigement - ">" , "v" */}
        <button className="toggle_button" onClick={handleToggle}>
          {isCollapsed ? ">" : "v"}
        </button>

        {/* display the tag name. */}
        <div
          className="tag_name"
          onClick={() => changeTagName(tag, tag.name, false)}
        >
          {tag.name}
        </div>

        {/* button to add a new parent child.after clcik add chid create new tree in parent child. */}
        <button className="add_child_button" onClick={() => addChild(tag)}>
          Add Child
        </button>
      </div>

      {/* render tag content if it not collapsed */}
      {!isCollapsed && (
        <div className="tag_content">
          {tag.data !== undefined && (
            <div className="tag_data">
              Data:{" "}
              <input
                type="text"
                value={tag.data}
                onChange={(e) => changeTagName(tag, e.target.value)}
              />
            </div>
          )}

          {/* recursively render child tags. */}
          {tag.children &&
            tag.children.map((child) => (
              <RootView
                key={child.name}
                tag={child}
                addChild={addChild}
                changeTagName={changeTagName}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default RootView;

// tag = { data };
// addChild = { addChild };
// changeTagName = { changeTagName };

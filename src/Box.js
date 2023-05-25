import React, { useState } from "react";

/**
 * Component for a box object
 *
 * Props:
 * - backgroundColor : string for color
 * - width : string
 * - height : string
 * - removeBox : function
 *
 * BoxList -> Box
 *
 * @param {Object} param0
 * @returns HTML for rendering box
 */
function Box({ backgroundColor, width, height, removeBox }) {
  const styles = {
    backgroundColor,
    width,
    height
  };
  console.log(styles);

  return (
    <div>
      <div style={styles}><button onClick={removeBox}>X</button></div>
    </div>
  );
}

export default Box;
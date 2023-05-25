import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";


/**
 * State:
 * - Array of box objects
 *
 * App -> BoxList -> Box + NewBoxForm
 *
 * @returns HTML for rendering BoxList
 */
function BoxList() {
  const [boxList, setBoxList] = useState([]);

  /**
   * creates a new uuid for box object and updates it into list
   * @param {Object} box
   */
  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxList(boxes =>
      [...boxes, newBox]
    );
  }

  /**
   * Takes in a box object and removes it from the box list
   * @param {Object} box
   */
  function removeBox(box) {
    setBoxList(boxes => boxes.filter(elem => elem.id !== box.id));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}></NewBoxForm>
      <ul>
        {boxList.map(box => <Box
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          key={box.id}
          removeBox={()=>removeBox(box)}/>
        )}
      </ul>
    </div>

  );

}

export default BoxList;

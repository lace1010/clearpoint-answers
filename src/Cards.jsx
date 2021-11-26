import React, { useState } from 'react'

const Cards = (props) => {
    const [row, setRow] = useState(Array(props.amount).fill("down"))
  
    const handleClick = (e, index) => {

      e.preventDefault();
      let tdValue = e.target.dataset.value;

      if (tdValue === "down") {
          let newArray = Array(props.amount).fill("down");
        for (let i = 0; i < props.amount; i++) {
          if (i === index) {
            newArray[index] = "up"
          } 
        }
        setRow(newArray)
      }
    };
  
    return (
      <table>
        <tbody>
          <tr>
            {row.map((item, index) => (
              <td
                onClick={(e) => handleClick(e, index)}
                data-value={item}
                key={index}
              >
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

export default Cards;

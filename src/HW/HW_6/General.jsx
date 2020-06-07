import React from "react";

export function General(props) {
  const data = props.generalData.data;

  return (
    <ul>
      {Object.keys(data).map((key) => (
        <li>
          {key} : {data[key]}
        </li>
      ))}
    </ul>
  );
}

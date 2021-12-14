import React from "react";
import ConsultationHistory from "./ConsultationHistory";

let list = [];

function makeList(num) {
  for (let i = 1; i <= num; i++) {
    list.push(i);
  }
}
makeList(20);
const ConsultationHistoryList = (props) => {
  return (
    <ul>
      {list.map((history, idx) => (
        <ConsultationHistory history={history} key={idx} />
      ))}
    </ul>
  );
};

export default ConsultationHistoryList;

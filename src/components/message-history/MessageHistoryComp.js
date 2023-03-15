import React from 'react';
import "./messageHistoryStyle.css"

function MessageHistoryComp({ msg }) {
  // !msg && return null;
  return msg.map((row, i) => (
    <div key={i} className="message-history">
      <div className="send font-weight-bold text-secondary mt-3">
        <div className="sender"> {row.messageBy} </div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
}

export default MessageHistoryComp;

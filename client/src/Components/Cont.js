import React from 'react';
import '../Styles/Cont.css';

const Cont = props => {
  return (
    <div className="cont" style={{ padding: `${props.padding}` }}>
      <div
        className="overlaycontent"
        style={{
          background: `${props.background}`
        }}
      />
      <div
        style={{ color: `${props.captionCol}` }}
        className="captionEle wow bounceInLeft"
        data-wow-delay="0.1s"
        data-wow-duration="0.7s">
        {props.caption}
      </div>
      <div
        style={{
          background: `${props.captionBorder}`,
          margin: `${props.captionMargin}`
        }}
        className="captionBorder wow bounceInLeft"
        data-wow-delay="0.2s"
        data-wow-duration="0.7s"
      />

      {props.children}
    </div>
  );
};

export default Cont;

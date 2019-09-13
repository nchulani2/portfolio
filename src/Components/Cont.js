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
        className="captionEle"
        data-aos="flip-down"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="150">
        {props.caption}
      </div>
      <div
        style={{
          background: `${props.captionBorder}`,
          margin: `${props.captionMargin}`
        }}
        className="captionBorder"
        data-aos="fade-left"
        data-aos-duration="300"
        data-aos-easing="ease"
        data-aos-delay="500"
      />

      {props.children}
    </div>
  );
};

export default Cont;

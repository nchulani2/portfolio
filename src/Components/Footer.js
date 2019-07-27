import React from 'react';
import '../Styles/Footer.css';

const goHome = e => {
  e.preventDefault();
  const Home = document.querySelector('.home');

  Home.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
};

const Footer = props => {
  return (
    <div className="footer">
      <h3 className="headBackUp">Shall we head back up?</h3>
      <button className="footerButt" onClick={goHome}>
        <i className="level up alternate icon" />
        <span className="tooltiptext">All aboard to the top !</span>
      </button>

      <div className="iconCont">
        <a href="https://www.linkedin.com/in/naveenchulani/">
          <i className="iconEle linkedin icon" />
        </a>
        <a href="https://github.com/nchulani2">
          <i className="iconEle github alternate icon" />
        </a>
      </div>
      <div className="footerContainer">
        © 2019 Copyright: <a href="#">naveenchulani</a>
      </div>
    </div>
  );
};

export default Footer;

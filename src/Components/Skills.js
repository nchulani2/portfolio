import React from 'react';
// import {
//   HtmlFiveImg,
//   CssThreeImg,
//   JavascriptImg,
//   ReactImg,
//   jQueryImg,
//   SemanticImg,
//   BootstrapImg,
//   ReduxImg,
//   NodeImg,
//   ExpressImg,
//   MongodbImg,
//   MySQLImg,
//   NpmImg,
//   GitImg,
//   PhotoshopImg,
//   FigmaImg
// } from './ImageImports';
import '../Styles/Skills.css';

const Skills = () => {
  return (
    <div className="skillsEle">
      <h2
        className="wow fadeInDown"
        data-wow-delay="0.3s"
        data-wow-duration="0.5s">
        Hover over the particular skill for details
      </h2>
      <div className="titleEle wow fadeIn" data-wow-delay="0.5s">
        Frontend
      </div>
      <div
        className="ui stackable two column grid wow slideInUp"
        data-wow-delay="0.2s"
        data-wow-duration="0.5s"
        id="skillsGrid">
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="HTML5" src={HtmlFiveImg} /> */}
                  <span className="tooltiptext">HTML 5</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="CSS3" src={CssThreeImg} /> */}
                  <span className="tooltiptext">CSS 3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Javascript" src={JavascriptImg} /> */}
                  <span className="tooltiptext">Javascript</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="React" src={ReactImg} /> */}
                  <span className="tooltiptext">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="jQuery" src={jQueryImg} /> */}
                  <span className="tooltiptext">jQuery</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Redux" src={FigmaImg} /> */}
                  <span className="tooltiptext">Figma</span>
                </div>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Semantic UI" src={SemanticImg} /> */}
                  <span className="tooltiptext">Semantic UI</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Bootstrap" src={BootstrapImg} /> */}
                  <span className="tooltiptext">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Redux" src={ReduxImg} /> */}
                  <span className="tooltiptext">Redux</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="toolCont">
                  {/* <img alt="Redux" src={PhotoshopImg} /> */}
                  <span className="tooltiptext">Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui stackable three column grid">
        <div className="five wide column">
          <div className="titleEle wow fadeIn" data-wow-delay="0.5s">
            Backend
          </div>
          <div
            className="ui grid container bottomGrids wow slideInLeft"
            data-wow-delay="0.3s"
            data-wow-duration="0.5s">
            <div className="eight wide column">
              <div className="toolCont">
                {/* <img alt="Node.js" src={NodeImg} /> */}
                <span className="tooltiptext">node.js</span>
              </div>
            </div>
            <div className="eight wide column">
              <div className="toolCont">
                {/* <img alt="Express" src={ExpressImg} /> */}
                <span className="tooltiptext">express</span>
              </div>
            </div>
          </div>
        </div>

        <div className="six wide column">
          <div className="titleEle wow fadeIn" data-wow-delay="0.5s">
            Database
          </div>
          <div
            className="ui grid container bottomGrids wow slideInUp"
            data-wow-delay="0.3s"
            data-wow-duration="0.5s">
            <div className="eight wide column">
              <div className="toolCont">
                {/* <img alt="MongoDB" src={MongodbImg} /> */}

                <span className="tooltiptext">MongoDB</span>
              </div>
            </div>
            <div className="eight wide column">
              <div className="toolCont">
                {/* <img alt="MySQL" src={MySQLImg} /> */}
                <span className="tooltiptext">MySQL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="five wide column">
          <div className="titleEle wow fadeIn" data-wow-delay="0.5s">
            Build
          </div>
          <div
            className="ui grid container bottomGrids wow slideInRight"
            data-wow-delay="0.3s"
            data-wow-duration="0.5s">
            <div className="eight wide column">
              <div className="toolCont">
                {/* <img alt="npm" src={NpmImg} /> */}
                <span className="tooltiptext">npm</span>
              </div>
            </div>
            <div className="eight wide column">
              <div className="toolCont">
                {/* <img alt="git" src={GitImg} /> */}
                <span className="tooltiptext">git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

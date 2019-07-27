import React from 'react';
import {
  HtmlFiveImg,
  CssThreeImg,
  JavascriptImg,
  ReactImg,
  jQueryImg,
  SvgImg,
  SemanticImg,
  BootstrapImg,
  ReduxImg,
  NodeImg,
  ExpressImg,
  MongodbImg,
  MySQLImg,
  NpmImg,
  GitImg
} from './ImageImports';
import '../Styles/Skills.css';

const Skills = () => {
  return (
    <div className="skillsEle">
      <div className="titleEle wow fadeIn" data-wow-delay="0.5s">
        Frontend
      </div>
      <div
        className="ui stackable two column grid wow slideInUp"
        data-wow-delay="0.3s"
        data-wow-duration="0.5s"
        id="skillsGrid">
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <img className="imageEle" alt="HTML5" src={HtmlFiveImg} />
              </div>
              <div className="eight wide column">
                <img className="imageEle" alt="CSS3" src={CssThreeImg} />
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <img
                  className="imageEle"
                  alt="Javascript"
                  src={JavascriptImg}
                />
              </div>
              <div className="eight wide column">
                <img className="imageEle" alt="React" src={ReactImg} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <img className="imageEle" alt="jQuery" src={jQueryImg} />
              </div>
              <div className="eight wide column">
                <img className="imageEle" alt="SVG" src={SvgImg} />
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui grid container">
              <div className="eight wide column">
                <img className="imageEle" alt="Semantic UI" src={SemanticImg} />
              </div>
              <div className="eight wide column">
                <img className="imageEle" alt="Bootstrap" src={BootstrapImg} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide column">
            <div className="ui grid container">
              <div className="sixteen wide column">
                <img className="imageEle" alt="Redux" src={ReduxImg} />
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
              <img className="imageEle" alt="Node.js" src={NodeImg} />
            </div>
            <div className="eight wide column">
              <img className="imageEle" alt="Express" src={ExpressImg} />
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
              <img className="imageEle" alt="MongoDB" src={MongodbImg} />
            </div>
            <div className="eight wide column">
              <img className="imageEle" alt="MySQL" src={MySQLImg} />
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
              <img className="imageEle" alt="npm" src={NpmImg} />
            </div>
            <div className="eight wide column">
              <img className="imageEle" alt="git" src={GitImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

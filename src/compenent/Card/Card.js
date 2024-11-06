import './card.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Card = ({ item, index }) => {
  
  return (
    <Fade bottom>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card cardlastprojict" key={item.id || index}>
          <Link to={`/Details/${item.id}`}>
            <img className="card-img-top" src={item.img} alt={item.title} />
          </Link>
          <Link to={`/Details/${item.id}`}>
            <div className="card-body latestworks-body">
              <h5 className="card-title latestworks-h5">{item.title}</h5>
              <p className="card-text latestworks-p">{item.description}</p>
            </div>
          </Link>
          <div className="btnHome">
            <a href={item.view} className="btn btn-sleek" target="_blank" rel="noopener noreferrer">
              مشاهدة<FontAwesomeIcon icon={faEye} className="coloricon" />
            </a>
            <a href={item.download} className="btn btn-sleek" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
              تحميل<FontAwesomeIcon icon={faGithub} className="coloricon" />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;

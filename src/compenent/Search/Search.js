import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";



const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const [data, setData] = useState([]);
  const query = useQuery();
  const searchTerm = query.get('query');

  const filteredItems = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.By.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (Array.isArray(item.type) && item.type.some(typeItem => typeItem.toLowerCase().includes(searchTerm.toLowerCase()))) ||
    (Array.isArray(item.tech) && item.tech.some(techItem => techItem.toLowerCase().includes(searchTerm.toLowerCase())))
  );
  
  

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        const homeData = response.data.posts;
        setData(homeData);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <HelmetProvider>
    <Helmet>
      <title>قالب | نتائج البحث</title>
    </Helmet>
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="row rowhome">
            {filteredItems
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={item.id || index}>
                  <div className="card cardlastprojict">
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
                      <a href={item.view} className="btn btn-sleek" target="_blank" rel="noopener noreferrer">مشاهدة<FontAwesomeIcon icon={faEye} className="coloricon" /></a>
                      <a href={item.download} className="btn btn-sleek" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>تحميل<FontAwesomeIcon icon={faGithub} className="coloricon" /></a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Search;

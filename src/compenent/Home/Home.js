import "./home.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';


const Home = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="home">
      <div className="container">
        <div className="row">
          <div className='input-section'>
            <input
              type="text"
              placeholder="ابحث هنا..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="section-title">
            <h2>جميع القوالب</h2>
          </div>
          <div className="row rowhome">
          <Fade top>
            {filteredItems
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // ترتيب العناصر بترتيب تنازلي
              .map((item, index) => ( // استخدام .map() مباشرة بعد الترتيب
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="card cardlastprojict">
                    <a href={item.view} target="_blank" rel="noopener noreferrer">
                      <img className="card-img-top" src={item.img} alt={item.title} />
                      <div className="card-body latestworks-body">
                        <h5 className="card-title latestworks-h5">{item.title}</h5>
                        <p className="card-text latestworks-p">{item.description}</p>
                      </div>
                    </a>
                    <ul>
                      <li><a href={item.download} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="coloricon"/></a></li>
                      <li><a href={item.view} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye} className="coloricon" /></a></li>
                      <li><a href={item.qalip} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLocationArrow} className="coloricon"/></a></li>
                    </ul>
                  </div>
                </div>
              ))}
                        </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

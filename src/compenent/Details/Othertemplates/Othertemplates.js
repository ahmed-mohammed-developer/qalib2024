import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Othertemplates = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // تمرير الصفحة لأعلى عند تحميل المكون
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        const homeData = response.data.posts;
        setData(homeData);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        // يمكنك هنا إضافة منطق لإظهار رسالة للمستخدم
      });
  }, []);

  // تحديد فقط 3 عناصر عشوائية
  const filteredItems = data.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className="home" style={{paddingTop: "10px"}}>
      <div className="container">
        <div className="row">
          <div className="row rowhome">
            {filteredItems.map((item, index) => (
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
                      <a href={item.view} className="btn btn-sleek" target="_blank" rel="noopener noreferrer">
                        مشاهدة<FontAwesomeIcon icon={faEye} className="coloricon" />
                      </a>
                      <a href={item.download} className="btn btn-sleek" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
                        تحميل<FontAwesomeIcon icon={faGithub} className="coloricon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Othertemplates;

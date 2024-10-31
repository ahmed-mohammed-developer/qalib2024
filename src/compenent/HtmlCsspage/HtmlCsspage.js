import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Card from '../Card/Card';



const HtmlCsspage = () => {
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

  const Cards = data
    .filter(item => item.type.includes("Html")) // تصفية العناصر
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // ترتيب العناصر بترتيب تنازلي
    .map((item, index) => (
      <Card key={index} item={item} />
    ));

  return (
    <HelmetProvider>
    <Helmet>
      <title>قالب | Html & Css</title>
    </Helmet>
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>قالب | Html & Css</h2>
          </div>
          <div className="row rowhome">
            {Cards}
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
}

export default HtmlCsspage;

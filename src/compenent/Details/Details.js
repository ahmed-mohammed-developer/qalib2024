import React, { useEffect, useState, useCallback } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import CheckIcon from '@mui/icons-material/Check';
import Othertemplates from './Othertemplates/Othertemplates';

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // تمرير الصفحة لأعلى عند تحميل المكون
  }, []);
  const [data, setData] = useState(null);
  const [tech, setTech] = useState([]);
  const [type, setType] = useState([]);
  const { id } = useParams();

  const fetchDetails = useCallback(async () => {
    try {
      const response = await axios.get('/data.json');
      console.log("البيانات المستجابة:", response.data.posts);
      const item = response.data.posts.find(post => post.id === parseInt(id));
      if (item) {
        setData(item);
        setTech(item.tech);
        setType(item.type);
      } else {
        console.log("لم يتم العثور على العنصر:", id);
      }
    } catch (error) {
      console.log("Exist", error);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  useEffect(() => {
    if (data && data.title) {
      document.title = `قالب | ${data.title}`;
    }
  }, [data]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>قالب |{data ? data.title : ''}</title>
      </Helmet>
      <div className="details">
        <div className="container">
          <div className="row">
            {data ? (
              <>
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="title-qalib">
                    <h2>{data.title}</h2>
                    <Link to={data.ByUrl} target="_blank" className="custom-link">
                      <p><span>بواسطة : </span>{data.By}</p>
                    </Link>
                  </div>
                  <div className="text-det">
                    <h2>وفر الوقت والجهد مع قوالب الويب.</h2>
                    <div className="text-point">
                      <i className="fa-regular fa-circle-check"></i>
                      <p>ابدأ مشروعك الرقمي الآن</p>
                      <CheckIcon />
                    </div>
                    <div className="text-point">
                      <i className="fa-regular fa-circle-check"></i>
                      <p>حوّل رؤيتك إلى واقع </p>
                      <CheckIcon />
                    </div>
                    <div className="text-point">
                      <p>اجعل موقعك يتألق </p>
                      <CheckIcon />
                    </div>
                  </div>
                  <div className="btnHome deatlispageicon">
                      <a href={data.view} className="btn btn-sleek" target="_blank" rel="noopener noreferrer" style={{ marginTop: "5px", width: "90%" }}>
                        مشاهدة<FontAwesomeIcon icon={faEye} className="coloricon " />
                      </a>
                      <a href={data.download} className="btn btn-sleek" target="_blank" rel="noopener noreferrer" style={{ marginTop: "10px", marginBottom: "20px", width: "90%" }}>
                        تحميل<FontAwesomeIcon icon={faGithub} className="coloricon "/>
                      </a>
                    </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className='description'>
                      <h3>تفاصيل القالب :</h3>
                      <p>{data.description}</p>
                      <h3 className='hdes'>التقنيات المستخدمة :</h3>
                      {tech.map((item, index) => (
                        <p key={index} className="tech">{item}</p>
                      ))}
                      <h3 className='hdes mb-3'> الفئة :</h3>
                      <div className="category-container">
                        {type.map((item, index) => (
                          <p key={index} className="category">{item}</p>
                        ))}
                      </div>
                      <h3 className='OtherTemplates-title mb-3'>قوالب أخرى:</h3>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>لم يتم العثور على البيانات</p>
            )}
          </div>
          <div className='row'>
            <Othertemplates />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Details;

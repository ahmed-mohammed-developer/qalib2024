import './footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";






const Footer = () => {
    const year = new Date().getFullYear(); // يحصل على السنة الحالية
  return (

    <div className='footer'>
      <div className="main-footer ">
        <div className="container">
            <div className="row mb-2 baner">
                <div className="col-lg-3 col-md-6 col-sm-6 imgSection marginBottom">
                <img className='logo' src={`${process.env.PUBLIC_URL}/images/logogreenfooter.png`} alt="قالب" />
                </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>الصفحات</h3>
                        <Link to={`/`}>
                       <p>جميع القوالب</p>
                        </Link>
                        <Link to={`/Landingpage`}>
                       <p>صفحات الهبوط</p>
                        </Link>
                        <Link to={`/Personalwebsitepage`}>
                       <p>موقع شخصي</p>
                        </Link>
                        <Link to={`/Companypage`}>
                       <p>موقع لشركة</p>
                        </Link>
                        <Link to={`/Reactpage`}>
                       <p>React</p>
                        </Link>
                        <Link to={`/Jspage`}>
                          <p className='marginBottom'>JavaScript</p>
                          </Link>
                    </div>
                </div>
               
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection">
                        <h3>تعلم البرمجة</h3>
                        <a href="https://satr.codes/" target="_blank" rel='noreferrer'><p>منصة سطر التعليمية</p></a>
                        <a href="https://elzero.org/" target="_blank" rel='noreferrer'><p>أكاديمية الزيرو</p></a>
                        <a href="https://harmash.com/" target="_blank" rel='noreferrer'><p>هرمش</p></a>
                        <a href="https://learnjavascript.online/?utm_source=jadjoubran.io" target="_blank" rel='noreferrer'><p>JavaScript</p></a>
                        <a href="https://learnhtmlcss.online/?utm_source=jadjoubran.io" target="_blank" rel='noreferrer'><p>Html & Css</p></a>
                        <a href="https://react-tutorial.app/?utm_source=jadjoubran.io" target="_blank" rel='noreferrer'><p className='marginBottom'>React</p></a>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection  marginb">
                        <h3>أبقى على تواصل</h3>
                        <a href="https://x.com/ahmed_M_Js" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faXTwitter} className="footericon"/></a>
                        <a href="https://www.linkedin.com/in/ahmedmohammeddeveloper/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className="footericon"/></a>
                        <a href="mailto:ahmed.mohammed.developer@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} className="footericon"/></a>
                        
                </div>
                <div className="deatelsSection marginBottom">
                        <a href="https://ahmedmohammeddeveloper.blogspot.com/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faBloggerB}className="footericon"/></a>
                        <a href="https://ahmedzaakan.blogspot.com/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faAlignLeft}  className="footericon"/></a>
                </div>
                </div>
            </div>
            <div className="row baner">
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="deatelsSection marginBottom">
                        <h3>جميع الحقوق محفوظة</h3>
                        <p>قالب {year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

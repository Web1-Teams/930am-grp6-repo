import React from 'react';
import { Link } from 'react-router-dom';
import '../one.jpeg'
export default function Pattern({patternData, logoUrl, headerText, footerText, navItems }) {
  return (
    
    <>
      <div lang="ar" dir="rtl">
        {/* Header Section */}
        <header>
          <div className="container">
            <div className="logo-container">
              <img src="C:\Users\alaan\demo2\src\one.jpeg" alt="شعار نَفْس" className="logo" />
            </div>
            <p>{headerText}</p>
            <nav>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>
                      <i className={item.icon} /> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

      <div className='pattern-container2'>
          {/* Main Section */}
          <div className="pattern-container">
      {/* Title Section */}
      <header className="title-section">
        <h1>{patternData.title || 'No title available'}</h1>
      </header>

      {/* Video and Description Section */}
      <section className="video-description-section">
        <div className="video-container">
          <iframe
            className="video-frame"
            src={patternData.link} // Replace with actual video ID
            
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="description-container">
          
          <p className='description-container-p'>{patternData.description2}</p>
        </div>
      </section>
      <hr/>

      {/* Essay Section */}
      <section className="essay-section">
        <p>{patternData.Essay}</p>

      </section>
    </div>
      </div>
        

        {/* Footer Section */}
        <footer>
       
          <p>{footerText}</p>
        </footer>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Navoo from './Navoo';

const AnmatFekreaa = ({ patterns, footerText, subscribeText, buttonText }) => {
  const navigationItems = [
    { title: "الرئيسية", icon: "fas fa-home", link: "/" },
    { title: "الأمراض النفسية", icon: "fas fa-brain", link: "/Disease" },
    { title: "الأنماط الفكرية", icon: "fas fa-stream", link: "/patterns" },
    { title: "الاضطرابات النفسية", icon: "fas fa-user-md", link: "/disorders1" },
    { title: "البودكاستات", icon: "fas fa-podcast", link: "/Startoo" },
  ];

  return (
    <div>
      <Navoo
        logoAlt="شعار نَفْس"
        headerText="نافذتك لفهم النفس والعقل"
        navigationItems={navigationItems}
      />
      <div>
        {/* Hero Section */}
        <section className="hero">
          <h2>الأنماط الفكرية</h2>
          <p>أدوات تغيير الذات  والواقع إلى الأفضل هي طرق أو أساليب معينة للتفكير التي يعتمدها الأفراد في معالجة المعلومات وفهم العالم من حولهم</p>
        </section>

        {/* Featured Episodes Section */}
        <section className="patterns">
  <h2>الحلقات المميزة</h2>
  <div className="patterns-list">
    {patterns.map((pattern, index) => (
      <div className="pattern" key={index}>
        <img src={pattern.image} alt={pattern.title} />
        <h3>{pattern.title}</h3>
        <p>{pattern.description}</p>
        {/* Correct dynamic link */}
        <Link to={`/pattern/${index}`} className="btn">المزيد</Link>
      </div>
    ))}
  </div>
</section>



        {/* Subscribe Section
        <section className="subscribe-section">
          <h2>{subscribeText}</h2>
          <form action="#">
            <input type="email" placeholder="أدخل بريدك الإلكتروني" required />
            <button type="submit">{buttonText}</button>
          </form>
        </section> */}

        {/* Footer Section */}
        <footer>
          <p>{footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default AnmatFekreaa

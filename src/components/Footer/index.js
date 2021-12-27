import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div>
        Phone: 574.536.3080 <br />
        Email: lancyb281@gmail.com <br />
        LinkedIn: Lance Bontrager <br /> LinkedIN: https://www.linkedin.com/in/lance-bontrager-919242218/
        <a href='https://github.com/1ance-301' placeholder='../../../assets/links/GitHub-Mark-Light-64px.png'></a>
      </div>
      <div className="container">&copy;{new Date().getFullYear()} by Lance Bontrager</div>
    </footer>
  );
};

export default Footer;

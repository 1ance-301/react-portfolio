import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div>
        <button onClick={'https://www.linkedin.com/in/lance-bontrager-919242218/'} alt='LinkedIn'></button>
        <a href='https://github.com/1ance-301' placeholder='../../../assets/links/GitHub-Mark-Light-64px.png'></a>
      </div>
      <div className="container">&copy;{new Date().getFullYear()} by Lance Bontrager</div>
    </footer>
  );
};

export default Footer;

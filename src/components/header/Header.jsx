import React, { useState, useEffect } from 'react'
import site from "../../data/site.json";
const {nav} = site;
import './header.scss'; // include global CSS

const Header = () => {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 50) {
      return setColorchange(true);
    } 
    return setColorchange(false);
  }

  return (
    <header id="header" className={colorChange ? 'active' : ''}>
        <ul>
          <li>
            <div class="theme-toggle">
              <label id="light_theme" title="Use light theme" class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
                <input type="radio" name="theme-toggle" value="light" aria-label="Use light theme" />
              </label>
              <label id="dark_theme" title="Use dark theme" class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                <input type="radio" name="theme-toggle" value="dark" aria-label="Use dark theme" />
              </label>
            </div>
          </li>
          {nav.map((item, i) => (
            <li key={i}>
                <a href={item.link} target={item.target} rel="noopener noreferrer">{item.name}</a>
            </li>
          ))}
        </ul>
    </header>
  )
}
export default Header;
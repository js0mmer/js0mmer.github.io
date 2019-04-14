import React from 'react';

export function closeNav() {
  document.querySelector('.nav-toggle').classList.remove('open');
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('.banner').classList.remove('blur');
}

export function NavToggle(props) {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector('.nav-toggle').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.banner').classList.toggle('blur');
  }

  return (
    <button className="nav-toggle" onClick={handleClick}>
      <span className={'icon' + (props.white ? ' white' : '')}></span>
    </button>
  );
}

export function AnchorLink(props) {
  function handleClick(e) {
    e.preventDefault();
    if (props.to) document.querySelector(props.to).scrollIntoView({ behavior: 'smooth', block: window.innerWidth <= 800 ? 'start' : 'center' });
    closeNav();
  }
  
  return <a href={props.to ? props.to : '#'} className={props.className} onClick={handleClick}>{props.children}</a>;
}

export function Link(props) {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector('.transition').style.top = '-50px';
    document.querySelector('.transition').style.bottom = 'auto';
    document.querySelector('.transition').style.height = 'calc(100vh + 100px)';

    props.transition(props.to);
  }
  
  return <a href={props.to} className={props.className} onClick={handleClick}>{props.children}</a>;
}
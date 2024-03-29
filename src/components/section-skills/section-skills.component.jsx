import React from 'react';
import Card from '../card/card.component';

import './section-skills.styles.scss';


const SectionSkills = () => {

  return (
    <section id='skills' className='skills'>
      <div className='skills-text'>
        <h2 className='skills-title'>My current Stack & Tools</h2> 
        <p className='about-text'>Front End Web Developer with an emphasis on Frontend web development and mobile using React & React Native. Experienced in building ecommerce applications, RESTful APIs, User Auth and oAuth with PassportJS and Firebase.</p>
        <p className='about-text'>Common libraries of use: Axios, Redux, Lodash, react-router, redux-thunk, styled-components and more. Common use of UI libraries: Bootstrap 4, React-Bootstrap, Material-UI.
        </p> 
      </div>
      <div className='cards-container'>
        <Card title='HTML 5' type='Web Development' devicon='devicon-html5-plain colored' />
        <Card title='CSS 3' type='Web Development' devicon='devicon-css3-plain colored' />
        <Card title='Sass' type='Web Development' devicon='devicon-sass-original colored' />
        <Card title='JavaScript ES6' type='Programming' devicon='devicon-javascript-plain'/>
        <Card title='ReactJS' type='Web Development' devicon='devicon-react-original colored' />
        <Card title='React Redux' type='Programming' devicon='devicon-redux-original colored' />
        <Card title='Bootstrap 4' type='Programming' devicon='devicon-bootstrap-plain' />
        <Card title='Firebase' type='Programming' devicon='devicon-firebase-plain colored' />
        <Card title='GitHub' type='Tools' devicon='devicon-github-original colored' />
        <Card title='Python' type='programming' devicon='devicon-python-plain' />
        <Card title='VS Code' type='Tools' devicon='devicon-visualstudio-plain colored' />
        <Card title='Webpack' type='Tools' devicon='devicon-webpack-plain colored' />
        <Card title='NPM' type='Tools' devicon='devicon-npm-original-wordmark colored' />
      </div>
    </section>
  )
};

export default SectionSkills;



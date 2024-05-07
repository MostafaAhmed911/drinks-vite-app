import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {

    return <section className='wrapper'>
      <div>
        <img src={img} alt="not found" />
        <h3>ohh!</h3>
        <p>we can't seem to find page you are looking for</p>
      </div>
    </section>
}

export default Error
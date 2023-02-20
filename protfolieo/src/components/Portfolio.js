import React from 'react';
import Project from './Project';
import { Parallax } from 'react-parallax';
function Portfolio() {
  return (
    <div>
            <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gwd6xFplutiexjdV6e9eD4yrwcPNI061GQ&usqp=CAU"
        bgImageAlt="the dog"
        strength={-200}
    >
        <Project></Project>
        <div style={{ height: '200px' }} />
        </Parallax>
    </div>
  );
}

export default Portfolio;
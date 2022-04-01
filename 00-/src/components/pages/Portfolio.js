import React from 'react';
import Project from "./Project"
import {ProjectArray} from '../projectArray';

function Portfolio() {
  return (
      <>
      {ProjectArray.map((project, idx) => {
          return (<Project
          title = {project.title}
          description = {project.description}
          repo = {project.repo}
          deployed = {project.deployed}
          key = {"project" + idx}
          />
      )})}</>
  )
}

export default Portfolio;

import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title ="";

const background =(
  <img class ='background'
        alt = 'ocean' 
        src = 'https://assets.newatlas.com/dims4/default/5ab0e1a/2147483647/strip/true/crop/1999x1328+0+0/resize/1440x957!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ffe%2F06%2F75f2c8704c71ade9c8881c997c8f%2Fdepositphotos-41105113-l-2015.jpg'
  />);

const images =[];

  for(const animal in animals){
    images.push(
    <img 
        key = {animal}
        className='animal'
        alt= {animal}
        src= {animals[animal].image}
        arialabel ={animal}
        role = 'button'
        onClick = {displayFact}
    />
    )
  }
function displayFact(e){
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const Facts = Math.floor(Math.random()*animalInfo.facts.length);
  const funFacts = animalInfo.facts[Facts]; 
  document.getElementById('fact').innerHTML=funFacts;
}
const showBackground = true;

const animalFacts =(
  <div>
    <h1>{title ===""? "Click an animal for a fun fact":title} 
    </h1>
    {showBackground && background}
    <p id ='fact'></p>

    <div className ='animals'>
      {images}
    </div>

  </div>
  );

ReactDOM.render(animalFacts,document.getElementById('root'));


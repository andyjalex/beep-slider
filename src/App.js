import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa'
import data from './data';
function App() {
  const [people, setPeople] =useState(data);
  const [index, setIndex] =useState(0);

  useEffect(() =>{
    const lastIndex = people.length -1;
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex) {
      setIndex(0)
    }
  }, [index,people]);

  useEffect(() =>{
  let slider =  setInterval(() => {
      //setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider) //a new index creates another timer. This line clears out existing timer.
  }, [index]);

  return (
    <section className='section'>
          <div className='title'>
            <h2>
              <span>/</span>Movie Characters
            </h2>
          </div>
          <div className='section-center'>
            {people.map((person,personIndex) =>{
              const { id, image, name, title, quote } = person;

              let position = 'nextSlide';
              if(personIndex === index) {
                position = 'activeSlide';
              }
              if(personIndex === index -1 ||
                (index ===0 && personIndex === people.length -1 )
              ){
                position = 'lastSlide';
              }
              return (
                <article className={position} key={id}>
                  <div>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                  </div>
                  <div>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  </div>

                </article>
              );
            })}
            <button className='prev' onClick={()=> setIndex(index -1)}>
              <FiChevronLeft />
            </button>
            <button className='next' onClick={()=> setIndex(index +1)}>
              <FiChevronRight />
            </button>
            <div className='breadcrumbs'>
            <FaRegCircle className='icon' />
            </div>
          </div>
        </section>
      )
}

export default App;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import HomeHero from '../components/HomeHero';
import PopularBlog from '../components/PopularBlog';

export default function Home(props) {

  const text = Typewriter({
    words: ['Machine Learning', 'Data Science', 'Web Development', 'C programming'],
    loop: 0,
    typeSpeed: 10
  })

  return (
    <>
      <main>
        <HomeHero text={text} mode={props.mode}/>
        <PopularBlog mode={props.mode}/>
      </main>
    </>
  )
}

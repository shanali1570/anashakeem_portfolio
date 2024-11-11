import React from 'react'
import {Hero} from '../components/Hero'
import {Contact} from '../components/Contact'
import {Page} from '../components/Project'
import {Certificate} from '../components/Certificate'
import {About} from '../components/About'
import {Skills} from '../components/Skills'
// import Certificate from './Certificate/page'
function Home() {
  return (
    <div>
      <Hero />
      <Page />
      <Certificate />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
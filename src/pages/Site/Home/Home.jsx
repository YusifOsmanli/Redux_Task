import React from 'react'
import Header2 from '../../../components/Header2/Header2'
import Slider from '../../../components/Slider/Slider'
import Section from '../../../components/Section/Section'
import Cards from '../../../components/Cards/Cards'
import Section2 from '../../../components/Section2/Section2'
import Cards2 from '../../../components/Cards2/Cards2'
import Section3 from '../../../components/Section3/Section3'
import Cards3 from '../../../components/Cards3.jsx/Cards3'
import Section4 from '../../../components/Section4/Section4'

const Home = () => {
  return (
    <div>
      <Header2/>
      <Slider/>
      <Section/>
      <Cards/>
      <Cards2/>
      <Section2/>
      <Cards/>
      <Section3/>
      <Cards3/>
      <Section4/>
    </div>
  )
}

export default Home
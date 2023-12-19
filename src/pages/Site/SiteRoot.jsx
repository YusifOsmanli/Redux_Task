import React, { useEffect } from 'react'
import Header from '../../layout/Site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Site/Footer/Footer'
import { useDispatch } from 'react-redux'
import { getData } from '../../redux/slice/dataSlice'
import Card from '../../components/Cards/Cards'


const SiteRoot = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SiteRoot
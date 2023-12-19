import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header__div'>
      <div className='img__div'>
          <img className='img' src="https://cdn.worldvectorlogo.com/logos/envato-market-api-2.svg" alt="" />
      <div>
        <button className='button__div'>
          Buy Now
        </button>
      </div>
      </div>
    </div>
  )
}

export default Header
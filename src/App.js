import React, { useState } from 'react'
import './App.css';
import robo from './assets/robo.jpg'
import Division from './components/Division';

function App() {
  const [visibility, setVisibility] = useState(false)

  const showButton = () => {
    const btn = document.querySelector('button')
    btn.classList.remove('remove')
    btn.classList.add('visible')
    setTimeout(() => {
      btn.classList.remove('visible')
      btn.classList.add('remove')
    }, 3000)
  }

  const loadDivisions = (e) => {
    const opacity = window.getComputedStyle(e.target).getPropertyValue("opacity")
    if(opacity < 0.4){
      return alert('Try Clicking When The Button Is More Visible!')
    } else{
      return setVisibility(true)
    }
  }

  return (
    <div className="app">
      {
        !visibility ?
        <div className='appContent'>
          <header className='headerContainer'>
            <h1 className='headerText'>Hello my fellow Comrades</h1>
          </header>
          <div className='contentContainer'>
            <div className='section'>
              <div className='btnContainer'>
                  <button onClick={(e) => loadDivisions(e)}>Let's Begin</button>
              </div>
              <div className='roboContainer'>
                <img onMouseOver={showButton} src={robo} />
              </div>
            </div>
            <p className='contentText'>This project is to serve the purpose of advertisement. We all have that one
              friend or family member whom engages himself in a skill or the other. With the
              intention of marketing his products/services. This project aims to satisfy such goals.
              Its a free platform where traders can come and advertise their products in order to attract
              customers. All we do is link them up, and advertise their services/products via our site, then customer 
              and seller meet up and finish their transaction. This will not just boost their businesses but will also advance 
              our coding skills as a unit. Remember, our main aim is to make a name for ourselves first, before the pay 
              comes in. In the future, we'll be working on several other projects, which will actually yield some 
              revenue as a group. But for now, why not practice, so who's in? If you are, hover on the image!
            </p>
          </div>
        </div>
        :
        <Division />
    }
    </div>
  );
}

export default App;

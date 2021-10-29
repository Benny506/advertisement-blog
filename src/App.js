import './App.css';
import robo from './assets/robo.jpg'

function App() {
  return (
    <div className="app">
      <div className='appContent'>
        <header className='headerContainer'>
          <h1 className='headerText'>Hello Comrades</h1>
        </header>
        <div className='contentContainer'>
          <div className='roboContainer'>
            <img src={robo} />
          </div>
          <p className='contentText'>This project is to serve the purpose of advertisement. We all have that one
            friend or family member whom engages himself in a skill or the other. With the
            intention of marketing his products/services. This project aims to satisfy such goals.
            Its a free platform where traders can come and advertise their products in order to attract
            customers. All we do is link them up, and advertise thei services/products via our site, then they
            link up and finish their transaction. This will not just boost their businesses but will also advance 
            our coding skills as a unit. Remember, our main aim is to make a name for ourselves first, before the pay 
            comes in. In the future, we'll be working on several other projects, which will actually yield some 
            revenue as a group. But for now, why not practice, so who's in? 
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

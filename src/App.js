  import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Tabs from "./components/Mytabs";
import './index.css';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Planetloader from './planetloader.svg';

const App = () => {
  
const [isAppLoading, setIsAppLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setIsAppLoading(false)
  }, 300);
}, [])

  return (
    <div className="App">
      {isAppLoading && <>
        <Container>
          <Header />
          <div className="planet-loader-div w-100 d-flex justify-content-center align-items-center mt-5">
            <img src={Planetloader} alt="planet-loader" />
          </div>
        </Container>
      </>}

      {!isAppLoading &&
      <Container>
        <Header />
        <Tabs />
      </Container>
      }
      
    </div>
    );
      
}

export default App;
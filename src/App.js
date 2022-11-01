import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BestBooks from './components/BestBooks';
import New from './components/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About'


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <main className='main'>
            <Header />
            <Routes>
              <Route
                exact path="/"
                element={<BestBooks />}
              >
              </Route>
              <Route
                exact path='/about'
                element={<About />}
              ></Route>
              <Route
                exact path='/new'
                element={<><BestBooks /><New /></>}
              ></Route>

            </Routes>
            <Footer />
          </main>
        </Router>
      </>
    )
  }
}

export default App;

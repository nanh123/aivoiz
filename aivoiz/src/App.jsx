import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Why from './pages/why/why';
import Home from './pages/home/home';
import CaseStudy from './pages/case/case';
import Features from './pages/features/features';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Demo from './pages/demo/demo';

function App() {
  return (
    <>
    <Router>

      <Header />
      <Routes>
        <Route exact path = "/" element = {< Home />} />
        <Route exact path = "whyUs/" element = {< Why />}/>
        <Route exact path = "case/" element = {< CaseStudy />}/>
        <Route exact path = "features/" element = {<Features />}/>
        <Route exact path = "aboutUs/" element = {< About />}/>
        <Route exact path = "contact/" element = {< Contact />}/>
        <Route exact path = "demo/" element = {< Demo />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App

import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header'; 
import './assets/css/style.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Counter from './pages/Counter';
import About from './pages/About';
import ClassState from './pages/ClassState';
import UseEffectHook from './pages/UseEffectHook';
function App() {
  return (
    <>
      <Header />
      <div class="sale-p">
        <p class="text-center">Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span
                class="text-warning ms-2">Shop Now</span></p>
    </div>
      {/* <Home></Home> */}
         {/* <About></About> */}
      {/* <Contact></Contact>  */}
      {/* <Counter></Counter> */}
      {/* <ClassState></ClassState> */}
    <UseEffectHook></UseEffectHook>
      <Footer />

    </>
  );
}

export default App;

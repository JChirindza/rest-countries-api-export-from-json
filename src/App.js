import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Countries from "./components/Countries"
import Country from "./components/Country"
import Header from "./components/Header"
// import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/'>
        <Countries />
      </Route>

      <Route path="/country/:name" children={<Country />}></Route>
      {/* <Footer /> */}
    </Router>
  )
}
export default App;

import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <div className="ideas">
            <h1>Innovative Ideas !</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not only five centuries, but also the 
                 leap into electronic typesetting, remaining essentially unchanged.</p>

                 <div className="container">
                     <button className="btn" >Know More</button>
                     <button className="btn"> Contact US</button>



                 </div>
        </div>
    </div>
  )
}

export default Home

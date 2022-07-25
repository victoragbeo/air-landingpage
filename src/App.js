import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    
    const cards = data.map(item => {
       return (
        <Card 
            key={item.id}
            item={item}
            // img= {item.coverImg}
            // rating= {item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
        />
       )
    } )

    return (
        <div>
            <Navbar />
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
           
            
        </div>
    )
}

/* <Card img="./images/IMG_8233.jpg" 
                  rating= {5.0}
                  reviewCount={6}
                  location= "U.S.A"
                  title="Life Lessons with Victor Agbeo"
                  price= {300}
            />   */
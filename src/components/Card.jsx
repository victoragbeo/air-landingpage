import React from "react"


export default function Card({item}) {
        
        let badgeText
        if (item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (item.location === "Online") {
            badgeText = "ONLINE"
        }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img src={item.coverImg} alt="" className="card--image" />
            <div className="card--stats">
                <img alt="" src="./images/star.png"  className="card--star"/>
                <span>{item.rating}</span>
                <span  className="gray" >({item.stats.reviewCount}) •</span>
                <span  className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
        
    );
}
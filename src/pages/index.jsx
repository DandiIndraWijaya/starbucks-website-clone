import React from "react"
import './home.css'

import Navbar from "../components/Navbar"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home = () => {

  return (
    <div>
      <Navbar />
        <main id="home-main">
          <Content 
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81069.jpg" 
            type={1}
            title="Fall at your fingertips"
            description="Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall."
            buttonText="Join now"
          />
          <Content 
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79582.png"
            type={2}
            title="Buy coffee, help grow a community"
            description="We care deeply about coffee farmers and their communities. Your support helps us invest in the well-being of farmers across the world’s coffee-growing regions."
            buttonText="Learn more"
          />
          <Content 
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79284.jpg"
            type={3}
            title="The art of the roast"
            description="With a new roast spectrum front and center on our coffee bags, it’s easier than ever to find a taste you love."
            buttonText="Order now"
          />

          <Content 
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79584.jpg"
            type={4}
            title="Nitro all fall long"
            description="Ready on tap, super-smooth Nitro Cold Brew. For a silky twist, try Vanilla Sweet Cream Nitro Cold Brew."
            buttonText="Order now"
          />

          <Content 
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79585.jpg"
            type={5}
            title="Deliciously protein-packed"
            description="Keep on the move with a Bacon, Gouda & Egg Sandwich or Egg White & Roasted Red Pepper Egg Bites."
            buttonText="Learn more"
          />

          <Content 
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81070.jpg"
            type={6}
            title="Celebrate Latinx Heritage Month"
            description="See how the Starbucks Hora del Café Partner (employee) Network is taking action to build stronger and kinder communities for all."
            buttonText="Learn more"
          />
        </main>
        <div className="divider"></div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
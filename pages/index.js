import Head from "next/head"
import Image from "next/image"
import Button from "../Components/Button"
import Card from "../Components/Card"
import RatingButton from "../Components/RatingButton"
import styles from "../styles/Home.module.css"
import { useState, useRef } from "react"

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isRating, setRating] = useState(null)
  function setRatingTo() {
    setRating()
  }

  function onSubmitHandler() {
    setIsSubmitted(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Interactive rating component</title>
        <meta
          name="description"
          content="This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        {!isSubmitted && (
          <Card>
            <RatingButton>
              <Image src="/icon-star.svg" width="15px" height="15px" />
            </RatingButton>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="rating_button_container">
              <RatingButton number={1}>1</RatingButton>
              <RatingButton number={2}>2</RatingButton>
              <RatingButton number={3}>3</RatingButton>
              <RatingButton number={4}>4</RatingButton>
              <RatingButton number={5}>5</RatingButton>
            </div>
            <Button onSubmit={onSubmitHandler}>Submit</Button>
          </Card>
        )}
        {isSubmitted}
      </main>
    </div>
  )
}

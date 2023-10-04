import { Rock_Salt } from "next/font/google"

const rock_salt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <div className="landing">
        <div className="arrow-container">
            <img src="/down-arrow.png" className="arrow" />
        </div>
      </div>
      <div className="featured">
        <img className="featured-image" />
        <div className="featured-text">
          <h4 className="featured-header"></h4>
          <p className="">Experience the thrill of live performances woven into the tale, as you unravel a symphony of secrets in the English countryside.</p>
        </div>
      </div>
      <div className="about">
        <div className="about-text">
            <h2 className="about-header">About Gerald</h2>
            <div className="about-line" />
            <p className="about-description">
                Gerald Elias, an accomplished author, seamlessly blends his background in music with his passion for writing, creating captivating mystery and crime novels. Before becoming a writer, Elias was a renowned violinist, lending his lyrical and evocative talents to prestigious orchestras. His novels reflect his love for adventure and travel, drawing inspiration from his life's rich experiences. Join us on a literary journey through the works of an author whose past is as diverse and captivating as the stories he crafts, where music and mystery intertwine to transport readers into thrilling realms of suspense and intrigue.
            </p>
        </div>
        <img className="about-image" src="/gerald-elias-portrait.jpeg"/>
      </div>
      <div className="home-books-container">
        <h2 className="home-books-header">Books by Gerald Elias</h2>
        <div className="home-books-list">
          <a href="/books/roundtree-days" className="home-book">
              <img src="/roundtree-days.jpg" />
          </a>
          <a href="/books/its-a-crime" className="home-book">
              <img src="/book-its-a-crime.jpg" />
          </a>
          <a href="/books/murder-at-the-royal-albert" className="home-book">
              <img src="/book-murder-at-the-royal-albert.jpg" />
          </a>
          <a href="/books/cloudy-with-a-chance-of-murder" className="home-book">
              <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
          </a>
          <a href="/books" className="home-book">
              <a href="/books">All Books</a>
          </a>
      </div>
      </div>
    </>
  )
}

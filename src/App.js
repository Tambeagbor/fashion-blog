import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';
import './style.css';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Article
          date="08/08/23"
          title="On the Street in Brooklyn"
          imageSrc="blog-image-one.jpg"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus..."
        />
        <Article
          date="08/07/23"
          title="Vintage in Vogue"
          imageSrc="blog-image-two.jpg"
          content="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur..."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;


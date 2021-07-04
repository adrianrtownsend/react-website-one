import Article from './components/article';
import Feature from './components/feature';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';

export default function App(){
  return (
    <div className="container">
      <Header />
      <Hero />
      <Feature />
      <Article />
      <Footer />
    </div>
  );
}
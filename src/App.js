import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { History } from './components/History'
import { Experience } from './components/Experience'
import { Example } from './components/Example'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <History />
      <Experience />
      <Example />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;

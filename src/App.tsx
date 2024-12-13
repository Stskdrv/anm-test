import Features from './components/Albums';
import Hero from './components/Hero';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <Features />
    </main>
  )
}

export default App;
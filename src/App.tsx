import Features from './components/Albums/Albums';
import ErrorComponent from './components/ErrorComponent';
import Hero from './components/Hero/Hero';
import ScrollToTopProvider from './components/ScrollToTopButton';
import useAlbums from './hooks/useAlbums';

const App = () => {

  const { isError } = useAlbums();

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <ScrollToTopProvider>
        <Hero />
        <Features />
      </ScrollToTopProvider>
    </main>
  )
}

export default App;
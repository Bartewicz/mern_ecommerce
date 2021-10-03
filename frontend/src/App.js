import Container from 'react-bootstrap/Container'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <main className="pb-3" role="main">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App

import { Container } from 'react-bootstrap'

import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <main className="pb-3" role="main">
        <Container>
          <h1>Pora na Twoją ulubioną kawkę.</h1>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App

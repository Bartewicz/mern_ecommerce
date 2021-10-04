import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import NotFound from './screens/NotFound'

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column">
        <Header />
        <main className="pb-3" role="main">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="*" component={NotFound} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

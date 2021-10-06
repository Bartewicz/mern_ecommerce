import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/Home'
import ProductScreen from './screens/Product'
import NotFound from './screens/NotFound'

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column">
        <Header />
        <main className="pb-3" role="main">
          <Container>
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

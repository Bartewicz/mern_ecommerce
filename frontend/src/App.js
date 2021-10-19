import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/Home'
import NotFound from './screens/NotFound'
import ProductScreen from './screens/Product'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App

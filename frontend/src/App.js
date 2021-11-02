import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { CartScreen } from 'screens/Cart'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomeScreen } from './screens/Home'
import { NotFound } from './screens/NotFound'
import { ProductScreen } from './screens/Product'
import { CartContext, useCartContext } from 'features/cart/useCartContext.hook'

export function App() {
  const cart = useCartContext()

  return (
    <Router>
      <CartContext.Provider value={cart}>
        <Header />
        <main className="pb-3" role="main">
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/cart" component={CartScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </CartContext.Provider>
    </Router>
  )
}

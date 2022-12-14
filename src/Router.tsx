import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrder } from './pages/CompleteOrder'
import { Home } from './pages/Home'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/CompleteOrder" element={<CompleteOrder />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}

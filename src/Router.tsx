import { Routes, Route } from 'react-router-dom'
// import { Header } from './components/Header'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Header" element={<Header />} /> */}
      </Route>
    </Routes>
  )
}

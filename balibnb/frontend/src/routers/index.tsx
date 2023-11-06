import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
import DefaultLayout from '../components/layout/default-layout'

export default function Routers() {
  return (
    <Routes>
      <Route path='' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

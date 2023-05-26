import { Routes, Route } from 'react-router-dom'

import Navigation from './component/Navigation/Navigation.component'
import IndexPage from './pages/IndexPage/IndexPage.route'

function App() {
  return (
    // <>
    //   <div className="">
    //     <Navigation />
    //   </div>
    //   <span>Text</span>
    // </>

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route path="/login" element={<h1>Login Page</h1>} />
    </Routes>
  )
}

export default App

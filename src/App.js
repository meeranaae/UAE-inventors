import React from 'react'
import Homepage from './pages/homepage'
import Navbar from './components/navbar'
import Footer  from './components/footer'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Homepage /> {/* Main content of the page */}
      </main>
      <Footer /> {/* Footer always at the bottom */}
    </div>
  )
}

export default App
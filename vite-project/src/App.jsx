import './App.css'
import { Header } from "./Components/Header/Header";
import { Layout } from "./Components/Layout"
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ marginTop: '70px', flex: '1' }}>
        <Layout />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { useRoutes } from 'react-router-dom'
import { Layout } from './pages/Layout';
import "./App.css";

function App() {
  const elements = useRoutes([
    { path: '/', element: <Layout/> }
  ])
  return (
    elements
  )
}

export default App;

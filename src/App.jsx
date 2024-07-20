import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import './App.css'



// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>

      <Routes>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            name={item.name}
            element={item.element}
          />
        ))}
      </Routes>
    </>
  )
}

export default App

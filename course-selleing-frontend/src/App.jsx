import './App.css'
import Signup from './signup'
import Signin from './signin'
import Addcourse from './Addcourse'
import Appbar from './Appbar'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Courses from './Courses'


function App() {

  return (
    <div style={{
      width:'100vw',
      height:'100vh',
      backgroundColor: '#eeeeee'
    }}>
      <Router>
      <Appbar></Appbar>
        <Routes>
          <Route path="/courses" element={<Courses/>} />
          <Route path="/add" element={<Addcourse/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </Router>
    </div>
  )
}


export default App

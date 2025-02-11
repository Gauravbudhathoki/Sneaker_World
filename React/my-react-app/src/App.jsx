import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./components/public/login.jsx'))
const Signup = lazy(()=> import('./components/public/signup.jsx'))
const Mainpage = lazy(() => import('./components/public/Mainpage.jsx'))



function App() {
  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/"Login element={<Login />} />
         {/* <Route path="/Signup" element={<Signup/>} /> 
        <Route path="/" element={<Mainpage/>} />  */}
       
        

      </Routes>
      </Suspense>
      
    </Router>
  );
}






export default App;






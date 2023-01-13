import Home from './pages/Home';
import History from './pages/History';
import Characters from './pages/Characters';
import Games from './pages/Games';
import {Route, Routes} from 'react-router-dom'

function App(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/characters' element={<Characters/>}></Route>
      <Route path='/games' element={<Games/>}></Route>
    </Routes>
  );
}

export default App;
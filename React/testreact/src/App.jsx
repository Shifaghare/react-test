import {Route , Routes} from 'react-router-dom';
import './App.css';
import Question1 from './Questions/Question1';
import Question5 from './Questions/Question5';
import Question3 from './Questions/Question3';





function App() {
  return (
    <div className='App'>
    <Routes>
    
    <Route exact path='/question1' element={<Question1/>}/>
    <Route exact path='/question3' element={<Question3/>}/>
    <Route exact path='/question5' element={<Question5/>}/>
    </Routes>
    </div>
  );
}

export default App;





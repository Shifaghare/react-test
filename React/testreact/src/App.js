import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Question1 from './Questions/Question1';
import Question5 from './Questions/Question5';
import Question3 from './Questions/Question3';





function App() {
  return (
    <div>
    <Routes>
    <Route exact path='/' element={<App/>}/>
    <Route exact path='/question1' element={<Question1/>}/>
    <Route exact path='/question3' element={<Question3/>}/>
    <Route exact path='/question5' element={<Question5/>}/>
    </Routes>
    </div>
  );
}

export default App;

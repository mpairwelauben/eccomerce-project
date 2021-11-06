import { BrowserRouter as Router,Route} from 'react-router-dom';

import './App.css';
import Cour from './cour';

import './index.css'
import Middle from './middle';
import Nav from './nav';
import Note from './note';
function App() {
  return (
    <section className=" container ">
    <Router>
    <Nav/>
    <Route exact path='/' component={Middle}/>
    <Route path='/note' component={Note}/>
    </Router>
    
    </section>

  );
}

export default App;

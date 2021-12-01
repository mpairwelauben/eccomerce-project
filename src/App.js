import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout';
import Produc from './components/getproducts';
import Layout from './components/layout';
import Message from './components/message';
import ON from './components/on';
import One from './components/one';
import Products from './components/products';
import './index.css'
import Javas from './javas';
import Mess from './Mess';


const usestyles = makeStyles({
  clan:{
    padding:20,
    margin:20
  }
})

function App() {
  const classes = usestyles()
  return (
    <section className={classes.clan}>
    <Router>
    <Layout>
    <Route exact path="/" component={Javas}/>
    <Route exact path="/one" component={One}/>
    <Route  path="/prod" component={ON}/>
    <Route  path="/messages" component={Message}/>
    <Route  path="/mess" component={Mess}/> 
    <Route  path="/products" component={Products}/> 
    {/* <Route  path="/product" component={Produc}/> */}
    <Route  path="/product" component={Checkout}/>
    
    </Layout>
    </Router>
    </section>
  

  );
}

export default App;

import { HashRouter as Router,Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from './components/navigation/Header';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MiPerfil from "./components/auth/MiPerfil";
import EditProfile from "./components/auth/EditProfile";
import Home from "./components/cursos/Home";

function App() {
  return (
    <Router>

    <Header/>
      <Switch>
        <Container>
          <div className='mt-10 '>  
            <Route path="/" component={Home} exact/>

            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={MiPerfil}/>
            <Route path="/editprofile" component={EditProfile}/>


          </div>
      </Container>
      </Switch>

    </Router>
  );
}

export default App;

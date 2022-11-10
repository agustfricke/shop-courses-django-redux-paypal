import { HashRouter as Router,Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from './components/navigation/Header';
import Footer from "./components/navigation/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MiPerfil from "./components/auth/MiPerfil";
import EditProfile from "./components/auth/EditProfile";
import Home from "./components/cursos/Home";
import UserListScreen from "./components/admin/UserListScreen";
import UserEditScreen from "./components/admin/UserEditScreen";
import SoloCurso from "./components/cursos/SoloCurso";
import CursoListScreen from "./components/admin/CursoListScreen";
import CursoForm from "./components/admin/CursoForm";
import Episodios from "./components/admin/Episodios";

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
            <Route path="/admin/users" component={UserListScreen}/>
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/curso/:id' component={SoloCurso} />
            <Route path='/admin/cursos' component={CursoListScreen} />
            <Route path='/cursos/:id/form' component={CursoForm} />
            <Route path='/epi/:id' component={Episodios} />
          </div>
      </Container>
      </Switch>
      <div>
    <Footer/>
    </div>


    </Router>
  );
}

export default App;

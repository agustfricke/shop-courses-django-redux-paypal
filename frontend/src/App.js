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
import EditEpisodio from "./components/admin/EditEpisodio";
import SoloEpisodio from "./components/admin/SoloEpisodio";
import Cart from "./components/shopping/Cart";
import OrderScreen from "./components/shopping/OrderScreen";
import PaymentScreen from "./components/shopping/PaymentScreen";
import PlaceOrderScreen from "./components/shopping/PlaceOrderScreen";

function App() {
  return (
    <Router>

    <Header/>
      <Switch>
        <Container>
          <div className='mt-10 mb-10 my-10'>  
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
            <Route path='/episodio/:id/form' component={EditEpisodio} />
            <Route path='/soloEpisodio/:id' component={SoloEpisodio} />
            <Route path='/cart/:id?' component={Cart} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
          </div>
      </Container>
      </Switch>
      


    </Router>
  );
}

export default App;

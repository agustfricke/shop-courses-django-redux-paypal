import { HashRouter as Router,Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from './components/navigation/Header';
import Footer from "./components/navigation/Footer";
import PrivateRoute from './components/auth/PrivateRoute';
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
import SoloCursoPagado from "./components/auth/SoloCursoPagado";
import SoloEpisodioPagado from "./components/auth/SoloEpisodioPagado";

function App() {
  return (
    <Router>

    <Header/>
      <Switch>
        <Container>
          <div className='mt-10 mb-10 my-10'>  
            <Route path="/" component={Home} exact/>
            <Route path='/epi/:id' component={Episodios} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path='/curso/:id' component={SoloCurso} />

            <PrivateRoute path="/profile" component={MiPerfil}/>
            <PrivateRoute path="/editprofile" component={EditProfile}/>
            <PrivateRoute path="/admin/users" component={UserListScreen}/>
            <PrivateRoute path='/admin/user/:id/edit' component={UserEditScreen} />
            <PrivateRoute path='/admin/cursos' component={CursoListScreen} />
            <PrivateRoute path='/cursos/:id/form' component={CursoForm} />
            <PrivateRoute path='/episodio/:id/form' component={EditEpisodio} />
            <PrivateRoute path='/soloEpisodio/:id' component={SoloEpisodio} />
            <PrivateRoute path='/cart/:id?' component={Cart} />
            <PrivateRoute path='/order/:id' component={OrderScreen} />
            <PrivateRoute path='/payment' component={PaymentScreen} />
            <PrivateRoute path='/placeorder' component={PlaceOrderScreen} />
            <PrivateRoute path='/solo/curso/:id' component={SoloCursoPagado} />
            <PrivateRoute path='/solo/epi/p/:id/:id' component={SoloEpisodioPagado} />


          </div>
      </Container>
      </Switch>
      


    </Router>
  );
}

export default App;

import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from './components/navigation/Header';
import Footer from "./components/navigation/Footer";
import PrivateRoute from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import MiPerfil from "./components/user/MiPerfil";
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
import OrderScreen from "./components/shopping/OrderScreen";
import PaymentScreen from "./components/shopping/PaymentScreen";
import PlaceOrderScreen from "./components/shopping/PlaceOrderScreen";
import SoloEpisodioPagado from "./components/user/SoloEpisodioPagado";
import MisCursos from "./components/user/MisCursos";
import ResetPasswordConfirm from './components/auth/ResetPasswordConfirm';
import ResetPassword from './components/auth/ResetPassword';
import Activation from "./components/auth/Activation";
import Register from "./components/auth/Register";
import MiSoloCurso from "./components/user/MiSoloCurso";
import Reviews from "./components/cursos/Reviews";


function App() {
  return (
    <Router>

    <Header/>
      <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path='/activate/:uid/:token' component={Activation} />
            <Route path='/reset-password' component={ResetPassword} />
            <Route path='/password/reset/confirm/:uid/:token/' component={ResetPasswordConfirm} />
            <Route path='/curso/:id' component={SoloCurso} />
            <Route path='/review/:id' component={Reviews} />


            <PrivateRoute path="/profile" component={MiPerfil}/>
            <PrivateRoute path="/mis/cursos" component={MisCursos}/>
            <PrivateRoute path="/mi/solo/curso/:id" component={MiSoloCurso}/>


            <PrivateRoute path="/editprofile" component={EditProfile}/>
            <PrivateRoute path="/admin/users" component={UserListScreen}/>
            <PrivateRoute path='/admin/user/:id/edit' component={UserEditScreen} />
            <PrivateRoute path='/admin/cursos' component={CursoListScreen} />
            <PrivateRoute path='/cursos/:id/form' component={CursoForm} />
            <PrivateRoute path='/episodio/:id/form' component={EditEpisodio} />
            <PrivateRoute path='/soloEpisodio/:id' component={SoloEpisodio} />
            <PrivateRoute path='/epi/:id' component={Episodios} />
            <PrivateRoute path='/order/:id' component={OrderScreen} />
            <PrivateRoute path='/payment' component={PaymentScreen} />
            <PrivateRoute path='/placeorder' component={PlaceOrderScreen} />
            <PrivateRoute path='/solo/epi/:epi/:curso' component={SoloEpisodioPagado} />


      </Switch>
      


    </Router>
  );
}

export default App;

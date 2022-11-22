import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

import Home from "./components/cursos/Home";
import SoloCurso from "./components/cursos/SoloCurso";
import SoloEpisodioPagado from "./components/user/SoloEpisodioPagado";
import Reviews from "./components/cursos/Reviews";

import PrivateRoute from './components/auth/PrivateRoute';
import Login from "./components/auth/Login";
import ResetPasswordConfirm from './components/auth/ResetPasswordConfirm';
import ResetPassword from './components/auth/ResetPassword';
import Activation from "./components/auth/Activation";
import Register from "./components/auth/Register";

import MiPerfil from "./components/user/MiPerfil";
import EditProfile from "./components/auth/EditProfile";

import UserListScreen from "./components/admin/UserListScreen";
import UserEditScreen from "./components/admin/UserEditScreen";
import CursoListScreen from "./components/admin/CursoListScreen";
import CursoForm from "./components/admin/CursoForm";
import Episodios from "./components/admin/Episodios";
import EditEpisodio from "./components/admin/EditEpisodio";

import OrderScreen from "./components/shopping/OrderScreen";
import PaymentScreen from "./components/shopping/PaymentScreen";
import Backend from "./components/cursos/Backend";
import Frontend from "./components/cursos/Frontend";
import Blockchain from "./components/cursos/Blockchain";
import Hacking from "./components/cursos/Hacking";
import Terms from "./components/navigation/Terminos";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/curso/:id' component={SoloCurso} />
        <Route path='/review/:id' component={Reviews} />
        <PrivateRoute path='/solo/epi/:epi/:curso' component={SoloEpisodioPagado} />
        <Route path='/backend' component={Backend} />
        <Route path='/frontend' component={Frontend} />
        <Route path='/blockchain' component={Blockchain} />
        <Route path='/hacking' component={Hacking} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/activate/:uid/:token' component={Activation} />
        <Route path='/reset-password' component={ResetPassword} />
        <Route path='/password/reset/confirm/:uid/:token/' component={ResetPasswordConfirm} />
        <PrivateRoute path="/profile" component={MiPerfil} />
        <PrivateRoute path="/editprofile" component={EditProfile} />
        <PrivateRoute path="/users/admin" component={UserListScreen} />
        <PrivateRoute path='/user/admin/:id/edit' component={UserEditScreen} />
        <PrivateRoute path='/cursos/admin' component={CursoListScreen} />
        <PrivateRoute path='/cursos/:id/form' component={CursoForm} />
        <PrivateRoute path='/episodio/:id/form' component={EditEpisodio} />
        <PrivateRoute path='/epi/:id' component={Episodios} />
        <PrivateRoute path='/premium' component={OrderScreen} />
        <PrivateRoute path='/payment' component={PaymentScreen} />
        <Route path='/terminos' component={Terms} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

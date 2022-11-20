import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({children, ...rest}) => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <Route {...rest}>
            {userInfo ? (
                children
               )   : (
                <Redirect to='/login'/>
                )
            }
        </Route>
    )
}

export default PrivateRoute;
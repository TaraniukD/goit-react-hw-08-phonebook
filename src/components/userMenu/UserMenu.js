import { Div, LogoImg, P, Button } from './userMenu.styled'
import logo from '../../image/DefAvatar1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const UserMenu = () => {

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <Div>
            <LogoImg src={logo} alt="Logo"/>
            <P>Hello {name}!</P>
            <Button onClick={() => dispatch(authOperations.logOut())}>Log out</Button>
        </Div>
    )
}
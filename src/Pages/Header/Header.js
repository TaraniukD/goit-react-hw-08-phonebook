import { Div, LinkP, Span } from "./Header.styled";
import { PAGE_NAME } from "router/paths";
import { UserMenu } from "components/userMenu/UserMenu";
import { FcPhoneAndroid } from 'react-icons/fc';
import { IconContext } from "react-icons";

import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
 
export const HeaderPage = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <>
            <Div>
            <LinkP to={PAGE_NAME.homepage}>Phonebook</LinkP>
            {isLoggedIn && <LinkP to={PAGE_NAME.addContact}>Add contacts</LinkP>}  
            </Div>
            <Div >
            <IconContext.Provider value={{size: '30px',}}>
             <FcPhoneAndroid />
             </IconContext.Provider>
             <Span> Your favorite phone book</Span>
            </Div>
            { isLoggedIn ? 
             <UserMenu /> :
            <Div>
                <LinkP to={PAGE_NAME.register}>Registration</LinkP>
                <LinkP to={PAGE_NAME.login}>Login</LinkP>
            </Div>}
        </>
    )
}
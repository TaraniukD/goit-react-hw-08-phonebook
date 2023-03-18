import { Div, LinkP } from "./Header.styled";
import { PAGE_NAME } from "router/paths";
import { UserMenu } from "components/userMenu/UserMenu";

import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
 
export const HeaderPage = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <>
            <Div>
                <LinkP to={PAGE_NAME.homepage}>Phonebook</LinkP>
                <LinkP to={PAGE_NAME.favoriteContacts}>Favorite contacts</LinkP>
            </Div>
            { isLoggedIn ? 
             <UserMenu /> :
            <Div>
                <LinkP to={PAGE_NAME.register}>Registration</LinkP>
                <LinkP to={PAGE_NAME.login}>Login</LinkP>
            </Div>
              }
        </>
    )
}
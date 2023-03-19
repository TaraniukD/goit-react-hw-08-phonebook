import { Div, P } from "./HomeTittle.styled";
import { Link } from "react-router-dom";
import { PAGE_NAME } from "router/paths";

export const HomeTittle = () => {

    return(
        <Div>
            <P>Please <Link to={PAGE_NAME.login}>log in</Link> or <Link to={PAGE_NAME.register}>register</Link> to view and save your own contacts!</P>
        </Div>
    )
}
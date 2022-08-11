import { useContext } from 'react';
import { userInfoContext } from "../App";
import Welcome from './Welcome';
import Guest from "./Guest";

export default function Hero () {
    const { isLoggedIn } = useContext(userInfoContext);
    return ( isLoggedIn ? <Welcome /> : <Guest />)
}
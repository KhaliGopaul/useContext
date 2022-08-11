import { useContext } from 'react';
import { UserInfoContext } from "../App";


export default function Menubar () {
    const { isLoggedIn } = useContext(UserInfoContext);
    return (isLoggedIn ? <Logoutt /> : <Login />)
}
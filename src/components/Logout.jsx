import { useContext } from 'react';
import { userInfoContext } from '../App';

export default function Logout () {
    const { setUser, setIsLoggedIn } = useContext(userInfoContext);
    const handleLogout = () => {
setIsLoggedIn(false)
setUser(null)
    }
    return <button onClick={handleLogout}>Logout</button>
}
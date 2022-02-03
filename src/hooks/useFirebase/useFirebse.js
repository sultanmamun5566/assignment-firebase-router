import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged , createUserWithEmailAndPassword} from "firebase/auth";

import { useEffect, useState } from "react"
import firebaseinitializeAuthentication from "../firebase/firebase.init";

firebaseinitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLodaing, setIsLodaing] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLodaing(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
        .finally(()=>setIsLodaing(false))
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLodaing(false)
        })
        return () => unsubcribe;
    }, []);

    const handleEmail = e => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        console.log(e.target.value)
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        subMit(email,password)
    }
    const subMit = (email,password) => {
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
        })
    }

    const SignOut = () => {
        setIsLodaing(false)
        signOut(auth)
            .then(() => {
                setUser({});
            })
        .finally(()=>setIsLodaing(false))
    }

    
    return{user,googleSignIn,SignOut,handleSubmit,handleEmail,handlePassword,isLodaing}
}
export default useFirebase;
import React from "react";


const UserContext = React.createContext({
    user: null,
    setUser: () => {},
    name : null,
    setName : () => {},
    surname : null,
    setSurname : () => {},
    email : null,
    setEmail : () => {},
    adresses : null,
    setAdresses : () => {},
});
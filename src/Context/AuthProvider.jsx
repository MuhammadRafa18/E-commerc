import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
    const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [Useraccount,setUseraccount] = useState({})
  useEffect(() => {
    try{

    const Forms = localStorage.getItem("Form");
    if (Forms) {
      try {
        setForm(JSON.parse(Forms));
      } catch (err) {
        console.error("Data di localStorage rusak:", err);
        setForm({});
      }
    }
    const Users = localStorage.getItem("Useraccount");
    if (Users) {
      try {
        setUseraccount(JSON.parse(Users));
      } catch (err) {
        console.error("Data di localStorage rusak:", err);
        setUseraccount({});
      }
    }
    }catch (err){
        console.log(err)
    }
    setLoading(false)
  }, []);



  useEffect(() => {
    localStorage.setItem("Form", JSON.stringify(Form));
  }, [Form]);
    useEffect(() => {
      if (Useraccount && Object.keys(Useraccount).length > 0) {
    localStorage.setItem("Useraccount", JSON.stringify(Useraccount));
  }
  }, [Useraccount]);
   const logout = () => {
    localStorage.removeItem("Useraccount");
    setUseraccount({});
    alert("Logout sukses")
    navigate('/Login')
  };
  return (
    <AuthContext.Provider value={{ Form, setForm,Useraccount,setUseraccount,logout,loading}}>
      {children}
    </AuthContext.Provider>
  );
};

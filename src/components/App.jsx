
// import { useLocalStorage } from "../hooks/Hooks";
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./Header/Header";
import { Phonebook } from "../Pages/Phonebook/Phonebook";
import { FavoriteContactList } from "Pages/FavoriteContactList/FavoriteContactList";
import { ErrorPage } from 'Pages/Error/Error';
import { RegisterForm } from "Pages/Register/Register";
import { LoginForm } from "Pages/Login/Login";
import { PAGE_NAME } from "router/paths";

import { Div } from "./App.styled";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/auth-operations";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div id="particles-js">

    <Div>
      <Header />
      <div style={{border: "1px solid #76b5c5", borderRadius: "8px", height: "2000px"}}>
      <Routes >
        <Route path={PAGE_NAME.homepage} element={<Phonebook />} />
        <Route path={PAGE_NAME.favoriteContacts} element={<FavoriteContactList />} />
        <Route path={PAGE_NAME.register} element={<RegisterForm />} />
        <Route path={PAGE_NAME.login} element={<LoginForm />} />
        <Route path={PAGE_NAME.error} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={PAGE_NAME.error} replace />} />
      </Routes>
      </div>
    </Div>
    </div>
  );
};

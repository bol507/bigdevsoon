import {  Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";
import SignUpWithMail from "../components/SignUpWithMail";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup-with-mail" element={<SignUpWithMail />} />
        </Routes>
    )
}

export default routes
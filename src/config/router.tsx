import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../components/Layout/DefaultLayout"
import Dashboard from "../pages/dashboard/Dashboard"
import AuthLayout from "../components/Layout/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ViewProfile from "../pages/profiles/ViewProfile"
import UpdateProfileData from "../pages/profiles/UpdateProfileData"
import HistoryTransactions from "../pages/transactions/History"
import Payment from "../pages/transactions/Payment"
import TopUp from "../pages/transactions/TopUp"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<DefaultLayout/>}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<ViewProfile />} />
                    <Route path="/profile/update/data" element={<UpdateProfileData />} />
                    <Route path="/transaction/history" element={<HistoryTransactions />} />
                    <Route path="/transaction/payment" element={<Payment />} />
                    <Route path="/transaction/topup" element={<TopUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router


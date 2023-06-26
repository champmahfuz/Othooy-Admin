import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminManageProfileList from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AdminManageProfileList/AdminManageProfileList';
import AddNewPackage from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AddNewCategory/AddNewCategory';
import AddNewInvoice from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AddNewInvoice/AddNewInvoice';
import ManageInvoice from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ManageInvoice/ManageInvoice';
import AddNewCategoryV1 from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AddNewCategoryV1/AddNewCategoryV1';
import PurchaseProduct from '../AdminDashboardComponents/AdminDashboardAllSubMenu/PurchaseProduct/PurchaseProduct';
import UploadPackage from '../AdminDashboardComponents/AdminDashboardAllSubMenu/UploadPackage/UploadPackage';
import ManageProductList from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ManageProductList/ManageProductList';
import AddNewCustomer from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AddNewCustomer/AddNewCustomer';
import ManageCustomer from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ManageCustomer/ManageCustomer';
import ManagePayment from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ManagePayment/ManagePayment';
import ManageTransaction from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ManageTransaction/ManageTransaction';
import PurchaseReport from '../AdminDashboardComponents/AdminDashboardAllSubMenu/PurchaseReport/PurchaseReport';
import SalesReport from '../AdminDashboardComponents/AdminDashboardAllSubMenu/SalesReport/SalesReport';
import ProfitReport from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ProfitReport/ProfitReport';
import TodaysReport from '../AdminDashboardComponents/AdminDashboardAllSubMenu/TodaysReport/TodaysReport';
import ManageExpense from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ManageExpense/ManageExpense';
import AddExpense from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AddExpense/AddExpense';
import MySeetingsList from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AdminSeetingList/MySeetingsList';
import ChangePasswordList from '../AdminDashboardComponents/AdminDashboardAllSubMenu/ChangePassword/ChangePsswordList';
import FindByPnr from '../AdminDashboardComponents/AdminDashboardAllSubMenu/FindByPnr/FindByPnr';
import AllBookingList from '../AdminDashboardComponents/AdminDashboardAllSubMenu/AllBookingList/AllBookingList';


const AdminDashboardRoutes = () => {
    return (
        <Routes>
            <Route path="adminProfile" element={<AdminManageProfileList />} />
            <Route path="AddNewPackage" element={<AddNewPackage />} />
            <Route path="AllBooking" element={<AllBookingList />}></Route>
            <Route path="AddNewInvoice" element={<AddNewInvoice />} />
            <Route path="ManageInvoice" element={<ManageInvoice />} />
            <Route path="Category" element={<AddNewCategoryV1 />} />
            <Route path="PurchasePackage" element={<PurchaseProduct />} />
            <Route path="uploadPackage" element={<UploadPackage />} />
            <Route path="ManagePackage" element={<ManageProductList />} />
            <Route path="AddNewCustomer" element={<AddNewCustomer />} />
            <Route path="ManageCustomer" element={<ManageCustomer />} />
            <Route path="ManagePayment" element={<ManagePayment />} />
            <Route path="ManageTransaction" element={<ManageTransaction />} />
            <Route path="PurchaseReport" element={<PurchaseReport />} />
            <Route path="SalesReport" element={<SalesReport />} />
            <Route path="ProfitReport" element={<ProfitReport />} />
            <Route path="TodaysReport" element={<TodaysReport />} />
            <Route path="ManageExpense" element={<ManageExpense />} />
            <Route path="AddExpense" element={<AddExpense />} />
            <Route path="adminSeetings" element={<MySeetingsList />}></Route>
            <Route path="ChangePassword" element={<ChangePasswordList />}></Route>
            <Route path="FindByPnr" element={<FindByPnr />}></Route>

            {/* <Route path="Register" element={<Register />} /> */}
        </Routes>
    );
};

export default AdminDashboardRoutes;
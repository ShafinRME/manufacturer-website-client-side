import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Authentication/Login';
import PageNotFound from './Pages/Shared/PageNotFound';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Authentication/SignUp';
import AuthRequirement from './Pages/Authentication/AuthRequirement';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import AddProduct from './Pages/AddProduct/AddProduct';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:toolsId' element={<AuthRequirement><Purchase></Purchase></AuthRequirement>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='dashboard' element={<AuthRequirement><Dashboard></Dashboard></AuthRequirement>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="admin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path="manageproducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="manageorders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

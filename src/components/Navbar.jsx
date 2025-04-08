import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cartmodel from '../pages/shop/Cartmodel';
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';
import avatarImg from '../assets/avatar.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const products = useSelector((state) => state.cart.products);
    const { user } = useSelector((state) => state.auth);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutUser] = useLogoutUserMutation();

    const handleCartToggle = () => setIsCartOpen(!isCartOpen);
    const handleDropDownToggle = () => setIsDropDownOpen(!isDropDownOpen);

    // Dropdown Menus
    const adminDropDownMenus = [
        { label: "Dashboard", path: "/dashboard/admin" },
        { label: "Manage Items", path: "/dashboard/manage-products" },
        { label: "All Orders", path: "/dashboard/manage-orders" },
        { label: "Add Product", path: "/dashboard/add-product" },
    ];
    
    const userDropDownMenus = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Profile", path: "/dashboard/profile" },
        { label: "Payments", path: "/dashboard/payments" },
        { label: "Orders", path: "/dashboard/orders" },
    ];

    const dropdownMenus = user?.role === 'admin' ? adminDropDownMenus : userDropDownMenus;

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <nav className="border-b-1 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    
                    {/* Desktop Navbar */}
                    <div className="hidden md:block">
                        <ul className="flex gap-5">
                            <li className="hover:text-red-400"><Link to="/">Home</Link></li>
                            <li className="hover:text-red-400"><Link to="/shop">Shop</Link></li>
                            <li className="hover:text-red-400"><Link to="/pages">Pages</Link></li>
                            <li className="hover:text-red-400"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="text-2xl">
                        <Link to="/">Lebaba<span className="text-red-700">.</span></Link>
                    </div>

                    {/* Search & Icons */}
                    <div className="relative flex gap-5">
                        <span>
                            <Link to="/search">
                                <i className="ri-search-line"></i>
                            </Link>
                        </span>

                        {/* Cart Icon */}
                        <span>
                            <button onClick={handleCartToggle} className="hover:text-red-600" aria-label="Cart">
                                <i className="ri-shopping-bag-line"></i>
                                {products.length > 0 && (
                                    <span className="absolute top-0 right-0 text-xs px-2 py-1 bg-red-600 text-white rounded-full">
                                        {products.length}
                                    </span>
                                )}
                            </button>
                        </span>

                        {/* User Dropdown */}
                        <span ref={dropdownRef}>
                            {user ? (
                                <>
                                    <img
                                        onClick={handleDropDownToggle}
                                        src={user?.profileImage || avatarImg}
                                        alt="User Avatar"
                                        className="size-6 rounded-full cursor-pointer"
                                    />
                                    {isDropDownOpen && (
                                        <div className="absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                            <ul className="font-medium space-y-4 p-2">
                                                {dropdownMenus.map((menu, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            onClick={() => setIsDropDownOpen(false)}
                                                            className="dropdown-items"
                                                            to={menu.path}
                                                        >
                                                            {menu.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="dropdown-items text-left w-full"
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link to="/login">
                                    <i className="ri-user-line"></i>
                                </Link>
                            )}
                        </span>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                            <i className={isOpen ? "ri-close-fill" : "ri-menu-line"}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {isOpen && (
                    <div className="md:hidden block mt-4">
                        <ul className="flex flex-col gap-3">
                            <li className="hover:text-red-400"><Link to="/">Home</Link></li>
                            <li className="hover:text-red-400"><Link to="/shop">Shop</Link></li>
                            <li className="hover:text-red-400"><Link to="/pages">Pages</Link></li>
                            <li className="hover:text-red-400"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Cart Model */}
            {isCartOpen && <Cartmodel products={products} isOpen={isCartOpen} onClose={handleCartToggle} />}
        </>
    );
};

export default Navbar;

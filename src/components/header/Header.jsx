import { Link, NavBar } from './Header.styled';

export const Header = () => {
    return (
        <NavBar >
            <Link to="/">
                Shop
            </Link>
            <Link to="/cart">
                Shopping Cart
            </Link>
        </NavBar >
    );
}
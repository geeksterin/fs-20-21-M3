import Copyright from "./Copyright";

const Header = () => {
    return (
        <header>
            <ul>
                <li className="largeTxt">Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <Copyright />
        </header>
    )
};

export default Header;
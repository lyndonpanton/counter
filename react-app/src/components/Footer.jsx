import './css/footer.css'
import Technology from './Technology';
import Social from './Social';
import Projects from './Projects';

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; { year } | Lyndon Mykal Panton | All Rights Reserved</p>
            <Technology />
            <Social />
            <Projects />
        </footer>
    );
};

export default Footer;

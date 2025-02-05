import './css/footer.css'

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; { year } | Lyndon Mykal Panton | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;

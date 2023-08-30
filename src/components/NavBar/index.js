import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "./styled";
import 'bootstrap/dist/css/bootstrap.min.css';                                                                           
import styles from './styles.module.scss'
import { FaMoon } from "react-icons/fa";

export default function NavBar(){
    return(
        <>
            <Navbar expand="lg" className={styles.bg__body__tertiary}>
                <Container className={styles.container}>
                    <Navbar.Brand href="/" className={styles.tittle}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.me__auto}>
                        <NavLink to="/historico" className={styles.link}>Histórico</NavLink>
                        <Link to="/addPagamento" className={styles.link}>Adicionar</Link>
                    </Nav>
                    <FaMoon size="20" className={`${styles.icon} ${styles.moon__icon}`}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )   
}
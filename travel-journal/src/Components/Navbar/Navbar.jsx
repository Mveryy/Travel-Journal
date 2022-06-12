import world from "/world.svg";
import "./navbar.css";

export default function Navbar({ item }) {
    return (
        <nav>
            <img src={world} alt="earth image" />
            <p>my travel journal.</p>
        </nav>
    );
}

import { Link } from "react-router-dom";
import s from "./Hero.module.css"

const Hero = () => {
    return <div className={s.hero}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <h2 className={s.subtitle}>Reliable and budget-friendly rentals for any journey</h2>
        <Link to="/catalog" className={s.link}>View Catalog</Link>
    </div>;
};
export default Hero;

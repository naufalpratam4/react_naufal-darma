import NavbarPage from "../../../../../14_React-Hook/Praktikum/react-hook/src/components/NavbarPage";
import styles from "../Pages/LandingPage.module.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <h1 className="text-center fw-bold">Landing Page</h1>
        <div className="text-center">
          <Link to="/createproduct">
            <button className="btn btn-light">Create Product</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

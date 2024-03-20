//* react-router
import { Outlet } from "react-router-dom";

//* components-UI
import Navbar from "../../components/ui/NavBar/Navbar";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import DarkLightModeButton from "../../components/ui/DarkLightModeButton/DarkLightModeButton";

//* styles
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div>
      <header>
        <Navbar />
        <Breadcrumbs />
      </header>

      <main className={styles.main}>
        <Outlet />
        <BackButton />
        <DarkLightModeButton />
      </main>
    </div>
  );
}

export default AppLayout;

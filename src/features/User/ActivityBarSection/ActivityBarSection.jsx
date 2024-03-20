//* 3rd-party-dashboard-library
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

//* custom-hooks
// import { useACollection } from "../../../hooks/useACollection";

//* utils
// import { filterRecipesOfCurrentUser } from "../../../utils/filterRecipesOfCurrentUser";

//* styles
import styles from "./ActivityBarSection.module.css";

function ActivityBarSection({ data }) {
  return (
    <section className={styles.activity_bar_section}>
      <h1>Recipe Activity Dashboard</h1>

      <Bar data={data} height={280} />
    </section>
  );
}

export default ActivityBarSection;

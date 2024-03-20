//* 3rd-party-dashboard-library
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

//* styles
import styles from "./DoughnutSection.module.css";

function DoughnutSection({ data }) {
  return (
    <section className={styles.doughnut_section_container}>
      <h1>Doughnut Dashboard</h1>
      <Doughnut data={data} />
    </section>
  );
}

export default DoughnutSection;

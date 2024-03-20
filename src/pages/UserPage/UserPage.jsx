//* redux
import { useSelector } from "react-redux";

//* user-feature-components
import UserImageSection from "../../features/User/UserImageSection/UserImageSection";
import ActivityBarSection from "../../features/User/ActivityBarSection/ActivityBarSection";
import AccountSection from "../../features/User/AccountSection/AccountSection";
import DoughnutSection from "../../features/User/DoughnutSection/DoughnutSection";
import BottomLeftContainer from "../../features/User/BottomLeftContainer/BottomLeftContainer";

//* custom-hooks
import { useACollection } from "../../hooks/useACollection";

//* utils
import { filterRecipesOfCurrentUser } from "../../utils/filterRecipesOfCurrentUser";

//* styles
import styles from "./UserPage.module.css";

function UserPage() {
  const uid = useSelector((state) => state.user.user.uid);

  const { documents: recipesCreatedArray } = useACollection("recipesCreated");
  const { documents: recipesLikedArray } = useACollection("recipesLiked");
  const { documents: recipesDeletedArray } = useACollection("recipesDeleted");

  const recipesCreated = filterRecipesOfCurrentUser(recipesCreatedArray, uid);
  const recipesLiked = filterRecipesOfCurrentUser(recipesLikedArray, uid);
  const recipesDeleted = filterRecipesOfCurrentUser(recipesDeletedArray, uid);

  const data = {
    labels: ["Created", "Liked", "Deleted"],
    datasets: [
      {
        label: "Recipe Activity",
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgb(136, 212, 92, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgb(136, 212, 92, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgb(136, 212, 92, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        hoverBorderColor: [
          "rgba(54, 162, 235, 1)",
          "rgb(136, 212, 92, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        data: [
          recipesCreated.length,
          recipesLiked.length,
          recipesDeleted.length,
        ],
      },
    ],
  };

  return (
    <div className={styles.main_container}>
      <img
        className={styles.main_container_bg}
        src="/images/backgrounds/User-page-bg.jpg"
        alt="Abstract-background"
      />

      <div className={styles.user_page_info_container}>
        <UserImageSection />

        <BottomLeftContainer
          data={{ recipesCreated, recipesLiked, recipesDeleted }}
        />

        <ActivityBarSection data={data} />

        <DoughnutSection data={data} />

        <AccountSection />
      </div>
    </div>
  );
}

export default UserPage;

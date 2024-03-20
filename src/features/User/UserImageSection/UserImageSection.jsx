//* redux
import { useSelector } from "react-redux";

//* UI-components
import ParallaxEffect from "../../../components/ui/ParallaxEffect/ParallaxEffect";
// import LoadingSpinner from "../../../components/ui/LoadingSpinner/LoadingSpinner";

//* custom-hooks
// import { useACollection } from "../../../hooks/useACollection";

//* utils
// import { filterRecipesOfCurrentUser } from "../../../utils/filterRecipesOfCurrentUser";

//* 3rd-party-loading-components
import { Dna } from "react-loader-spinner";

//* styles
import styles from "./UserImageSection.module.css";

function UserImageSection() {
  const status = useSelector((state) => state.user.status);
  const email = useSelector((state) => state.user.user.email);
  const photoURL = useSelector((state) => state.user.user.photoURL);

  // const { createdRecipesAmount, likedRecipesAmount, deletedRecipesAmount } =
  //   useSelector((state) => state.recipe);

  // const { documents: recipesCreated } = useACollection("recipesCreated");
  // const { documents: recipesLiked } = useACollection("recipesLiked");
  // const { documents: recipesDeleted } = useACollection("recipesDeleted");

  // const currentUserRecipesCreated = filterRecipesOfCurrentUser(
  //   recipesCreated,
  //   uid
  // );
  // const currentUserRecipesLiked = filterRecipesOfCurrentUser(recipesLiked, uid);
  // const currentUserRecipesDeleted = filterRecipesOfCurrentUser(
  //   recipesDeleted,
  //   uid
  // );

  return (
    <section className={styles.user_image_main_container}>
      <ParallaxEffect>
        <div className={styles.image_container}>
          {status === "loading" ? (
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          ) : (
            // {<LoadingSpinner />}
            <img src={photoURL || "/images/User-dark.png"} alt="User" />
          )}
        </div>
        <h2>{email}</h2>
      </ParallaxEffect>
    </section>
  );
}

export default UserImageSection;

//* react-hooks
import { useState } from "react";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* slice-user
import { setIsClicked, updateProfileImage } from "../userSlice";

//* components-UI
import Button from "../../../components/ui/Button/Button";

//* styles
import styles from "./UploadImageSection.module.css";

function UploadImageSection({ isClicked }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const status = useSelector((state) => state.user.status);

  const dispatch = useDispatch();

  function handleImageSelected(e) {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  }

  function handleImageUpload() {
    dispatch(updateProfileImage(selectedImage));
    dispatch(setIsClicked());
  }

  return (
    <div
      style={isClicked ? { alignSelf: "center" } : {}}
      className={styles.file_input_container}
    >
      <label className={styles.file_input}>
        Choose a file
        <input
          disabled={status === "loading"}
          type="file"
          accept="image/*"
          onChange={handleImageSelected}
        />
      </label>

      {selectedImage && (
        <Button
          className={styles.upload_image_button}
          disabled={status === "loading"}
          onClick={handleImageUpload}
        >
          Upload
        </Button>
      )}
    </div>
  );
}

export default UploadImageSection;

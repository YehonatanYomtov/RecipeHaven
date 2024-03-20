//* react-hooks
import { useEffect, useState } from "react";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* firebase-imports
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export function useSortACollection(sortBy) {
  const [documents, setDocuments] = useState([]);

  const dispatch = useDispatch();

  const uid = useSelector((state) => state.user.user.uid);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "likedRecipes"), (snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), dbId: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [sortBy, dispatch, uid]);

  return { documents };
}

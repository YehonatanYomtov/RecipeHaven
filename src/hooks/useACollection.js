//* react-hooks
import { useEffect, useState } from "react";

//* redux
import { useDispatch } from "react-redux";

//* firebase-imports
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export function useACollection(c) {
  const [documents, setDocuments] = useState([]);

  //*TODO: Check if you need this useDispatch hook.
  const dispatch = useDispatch();

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), dbId: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c, dispatch]);

  return { documents };
}

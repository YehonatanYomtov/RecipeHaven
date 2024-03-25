//* react-hooks
import { useEffect, useState } from "react";

//* redux
import { useDispatch, useSelector } from "react-redux";

//* firebase-imports
import { db } from "../firebase/config";
import { onSnapshot } from "firebase/firestore";

export function useSnapshot(collection, callback) {
  const dispatch = useDispatch();

  const uid = useSelector((state) => state.user.user.uid);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, collection), (snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), dbId: doc.id });
      });

      callback(results);
    });

    return () => unsub();
  }, [dispatch, collection, uid, callback]);
}

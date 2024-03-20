//* firebase-imports
import { deleteDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export async function deleteEntireFirebaseCollection(collectionName, uid) {
  let colRef = collection(db, collectionName);
  let col = await getDocs(colRef);
  let array = [];

  col.forEach((doc) => {
    array.push({ ...doc.data(), dbId: doc.id });
  });

  array.forEach(async (document) => {
    document.uid === uid;
    const docRef = doc(db, collectionName, document.dbId);
    await deleteDoc(docRef);
  });
}

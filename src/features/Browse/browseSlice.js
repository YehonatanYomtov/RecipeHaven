//* redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//* firebase-imports
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

//* utils
import { addCaseFullTemplate } from "../../utils/addCaseTemplate";

const initialState = {
  status: "idle",
  error: null,
};

const browseSlice = createSlice({
  name: "browse",
  initialState,

  extraReducers(builder) {
    addCaseFullTemplate(builder, addBrowseHistoryTag);
    addCaseFullTemplate(builder, deleteBrowseHistoryTag);
    addCaseFullTemplate(builder, deleteAllBrowseHistoryTags);
  },
});

// export const {} = browseSlice.actions;

export default browseSlice.reducer;

export const addBrowseHistoryTag = createAsyncThunk(
  "browse/addBrowseHistoryTag",
  async (newTag) => {
    await addDoc(collection(db, "browseHistoryTags"), newTag);
  }
);

export const deleteBrowseHistoryTag = createAsyncThunk(
  "browse/deleteBrowseHistoryTag",
  async (id) => {
    const docRef = doc(db, "browseHistoryTags", id);
    await deleteDoc(docRef);
  }
);

export const deleteAllBrowseHistoryTags = createAsyncThunk(
  "browse/deleteAllBrowseHistoryTags",
  async (tags) => {
    await tags.forEach((tag) => {
      const docRef = doc(db, "browseHistoryTags", tag.dbId);
      deleteDoc(docRef);
    });
  }
);

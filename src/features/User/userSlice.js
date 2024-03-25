//* redux-hooks
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//* firebase-imports
import { auth, storage } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//* utils
import {
  addCaseFullTemplate,
  addCasePendingTemplate,
  addCaseRejectedTemplate,
} from "../../utils/addCaseTemplate";
// import { useEffect, useState } from "react";

const initialState = {
  status: "idle",
  userSignedIn: JSON.parse(localStorage.getItem("userSignedIn")) || false,
  user: auth.currentUser,
  isClicked: false,
  // photoURL: "/images/User-dark.png",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setIsClicked(state) {
      state.isClicked = !state.isClicked;
    },
  },

  extraReducers(builder) {
    addCaseFullTemplate(builder, signup, {
      user: "payload",
      userSignedIn: true,
    });
    //* ====
    addCasePendingTemplate(builder, signin);
    builder.addCase(signin.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.userSignedIn = true;
    });
    addCaseRejectedTemplate(builder, signin);
    //* ====
    addCaseFullTemplate(builder, logout, { user: null, userSignedIn: false });
    //* =====
    addCaseFullTemplate(builder, authIsReady, { user: "payload" });
    //* =====
    addCaseFullTemplate(builder, updateProfileImage, { photoURL: "payload" });
  },
});

export const { setIsClicked } = userSlice.actions;

export default userSlice.reducer;

export const signup = createAsyncThunk(
  "user/signup",
  async function ({ email, password }) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = res.user;

    return newUser;
  }
);

export const signin = createAsyncThunk(
  "user/signin",
  async function ({ email, password }) {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  }
);

export const logout = createAsyncThunk("user/logout", async function () {
  await signOut(auth);
});

export const authIsReady = createAsyncThunk(
  "user/authIsReady",
  async function (user) {
    return user;
  }
);

export const updateProfileImage = createAsyncThunk(
  "user/updateProfileImage",
  async function (selectedImage) {
    const currentUser = auth.currentUser;
    const fileRef = ref(storage, `${currentUser.uid}.png`);

    await uploadBytes(fileRef, selectedImage);

    const photoURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, { photoURL });

    return photoURL;
  }
);

// const state = {
//   a: 5,
//   b: {
//     c: "d",
//   },
// };

// function useSelector(callback) {
//   const [s, setS] = useState(callback(state));

//   useEffect(() => {
//     setS(cb(state));
//   }, [state, cb]);

//   return s;
// }

// function APlus5() {
//   const a = useSelector((state) => state.a);
//   const c = useSelector((state) => state.b.c);

//   return <div>{a + 5}</div>;
// }

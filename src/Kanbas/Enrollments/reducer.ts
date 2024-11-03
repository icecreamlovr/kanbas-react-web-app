import { createSlice, current } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = { enrollments };

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: toEnroll }) => {
      const alreadyEnrolled = state.enrollments.some(
        (a: any) => a.user === toEnroll.user && a.course === toEnroll.course
      );
      if (alreadyEnrolled) {
        return;
      }

      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: toEnroll.user,
        course: toEnroll.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenroll: (state, { payload: toEnroll }) => {
      state.enrollments = state.enrollments.filter(
        (a: any) => a.user !== toEnroll.user || a.course !== toEnroll.course
      );
    },
  },
});
export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

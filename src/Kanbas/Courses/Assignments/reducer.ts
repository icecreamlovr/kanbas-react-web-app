import { createSlice, current } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = { assignments };

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      // don't assign new ID. this will cause inconsistency between reducer and server.
      // const newAssignment: any = {
      //   _id: new Date().getTime().toString(),
      //   lessons: [],
      //   title: assignment.title,
      //   course: assignment.course, // immutable
      //   description: assignment.description,
      //   points: assignment.points,
      //   dueDate: assignment.dueDate,
      //   availableFromDate: assignment.availableFromDate,
      //   availableUntilDate: assignment.availableUntilDate,
      // };
      const newAssignment = assignment;
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) => (a._id === assignment._id ? assignment : a)) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

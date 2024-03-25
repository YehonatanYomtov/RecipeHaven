export function addCaseFullTemplate(builder, functionName, values) {
  return builder
    .addCase(functionName.pending, (state) => {
      state.status = "loading";
    })
    .addCase(functionName.fulfilled, (state, action) => {
      state.status = "succeeded";

      for (const key in values) {
        const value = values[key];
        state[key] = value === "payload" ? action.payload : value;
      }
    })
    .addCase(functionName.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
}

export function addCasePendingTemplate(builder, functionName) {
  return builder.addCase(functionName.pending, (state) => {
    state.status = "loading";
  });
}

export function addCaseRejectedTemplate(builder, functionName) {
  return builder.addCase(functionName.rejected, (state, action) => {
    state.status = "rejected";
    state.error = action.error.message;
  });
}

export function addCaseFullTemplate(builder, functionName, stateNames, values) {
  return builder
    .addCase(functionName.pending, (state) => {
      state.status = "loading";
    })
    .addCase(functionName.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (
        stateNames?.length === 1 &&
        values?.length === 1 &&
        values.at(0) === "payload"
      ) {
        state[stateNames] = action.payload;
      }

      if (stateNames?.length > 1 && values?.length > 1) {
        stateNames.map((name, i) => {
          state[name] =
            values.at(i) === "payload" ? action.payload : values.at(i);
        });
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

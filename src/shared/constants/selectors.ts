import { createSelector } from "reselect";
import { RootState } from "../store";

const briefs: any = (state: RootState) => state.briefs;

export const bagBoxSelector = createSelector(briefs, (briefs: any) =>
  briefs.filter((d: any) => d.productId === 1)
);

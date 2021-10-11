import { createSelector } from "reselect";


export const filteredBriefs = () => {
  
  return (
    createSelector(
      (state:any) => state.filter,
      (state:any) => state.briefs,
      (briefs: any, filter: any) => {
        switch (filter.filterKey) {
          case 0:
            return briefs.briefs.filter((brief: any) => brief.productId === 0);
          case 1:
            return briefs.briefs.filter((brief: any) => brief.productId === 1);
          case 2:
            return briefs.briefs.filter((brief: any) => brief.productId === 2);
          case 3:
            return briefs.briefs.filter((brief: any) => brief.productId === 3);
          case 4:
            return briefs.briefs.filter((brief: any) => brief.productId === 4);
          default:
            return briefs.briefs;
        }
      }
    ))
};
import { FECTH_BRIEF_REQUEST, FECTH_BRIEF_SUCCESS, FECTH_BRIEF_FAILURE } from '../../shared/constants/ActionTypes';


type InitialState = {
  loading: boolean;
  briefs?: any[];
  error?: any[];
};

type Action = {
  type: String;
  briefs?: any[];
  error?: any[];
};

const initialState: InitialState = {
  loading: false,
};

export const fetchBriefReducer = (
  state: Object = initialState,
  action: Action
) => {
  switch (action.type) {
    case FECTH_BRIEF_REQUEST:
      return { ...state, loading: true };

    case FECTH_BRIEF_SUCCESS:
      return { ...state, loading: false, briefs: action.briefs };

    case FECTH_BRIEF_FAILURE:
      return { ...state, loading: false, error: action.error };
  }
};

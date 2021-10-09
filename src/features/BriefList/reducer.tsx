import { FETCH_BRIEF_REQUEST, FETCH_BRIEF_SUCCESS, FETCH_BRIEF_FAILURE } from '../../shared/constants/ActionTypes';


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
    case FETCH_BRIEF_REQUEST:
      return { ...state, loading: true };

    case FETCH_BRIEF_SUCCESS:
      return { ...state, loading: false, briefs: action.briefs };

    case FETCH_BRIEF_FAILURE:
      return { ...state, loading: false, error: action.error };
  }
};

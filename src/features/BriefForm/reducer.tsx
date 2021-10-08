import {
  ADD_BRIEF_REQUEST,
  ADD_BRIEF_SUCCESS,
  ADD_BRIEF_FAILURE,
} from "../../shared/constants/ActionTypes";

type InitialState = {
  loading: boolean;
  brief?: Object;
  error?: any[];
};

type Action = {
  type: String;
  brief?: Object;
  error?: any[];
};

const initialState: InitialState = {
  loading: false,
};

export const addBriefReducer = (
  state: Object = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_BRIEF_REQUEST:
      return { ...state, loading: true };

    case ADD_BRIEF_SUCCESS:
      return { ...state, loading: false, brief: action.brief };

    case ADD_BRIEF_FAILURE:
      return { ...state, loading: false, error: action.error };
  }
};

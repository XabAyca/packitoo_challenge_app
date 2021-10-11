import { FETCH_BRIEF_REQUEST, FETCH_BRIEF_SUCCESS, FETCH_BRIEF_FAILURE, FILTER_PRODUCT } from '../../shared/constants/ActionTypes';


type InitialState = {
  loading?: boolean;
  briefs?: any[];
  error?: any[];
  filterKey?: number;
};

type Action = {
  type: String;
  briefs?: any[];
  error?: any[];
  filterKey?: number;
};

type ActionFilter = {
  type: string;
  filterKey: number;
}

const initialState: InitialState = {
  loading: false,
};

const initialStateFilter: InitialState = {
  filterKey: 0,
};

export const fetchBriefsReducer = (
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
    
    case FILTER_PRODUCT:
      return { ...state, filterKey: action.filterKey}

    default:
      return state;
  }
};

export const filterKeyReducer = (
  state: Object = initialStateFilter,
  action: ActionFilter
) => {
  switch (action.type) {
    case FILTER_PRODUCT:
      return { ...state, filterKey: action.filterKey };

    default:
      return state;
  }
};

import * as appTypes from "../constants/app";

export default function app(state = {}, action: { type: any; data: any }) {
  switch (action.type) {
    case appTypes.MENU_UPDATE:
      return action.data;
    default:
      return state;
  }
}

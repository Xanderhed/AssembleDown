import { browserHistory } from 'react-router';

export const navigateFromForm =
  route =>
    (result, dispatch, props) => {
      result.payload.then(() => {
        browserHistory.push(route);
      });
    }

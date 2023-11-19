import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <div className={css.loaderWrapper}>
      <div className={css.loaderBox}>
        <Grid color="#FF5733" height={100} width={110} />
      </div>
    </div>,
    loaderRoot
  );
};

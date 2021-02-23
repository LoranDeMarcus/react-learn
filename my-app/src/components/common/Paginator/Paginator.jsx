import React from 'react';

import styles from './Paginator.module.css';

const Paginator = ({ page, onPageChanged, currentPage }) => {
    return (
        <span key={ page }
              onClick={ () => onPageChanged(page) }
              className={ ` ${ styles.pagItem }
              ${ currentPage === page && styles.selected } `
              }>
            { page }
        </span>
    );
};

export default Paginator;

import React, { useState, FC } from 'react';
import cn from 'classnames';

import styles from './Paginator.module.css';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    partSize?: number
}

const Paginator: FC<PropsType> = ({ totalItemsCount, pageSize, onPageChanged, currentPage, partSize = 10 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const partCount = Math.ceil(pagesCount / partSize);
    const [partNumber, setPartNumber] = useState(1);
    const leftPartPageNumber = (partNumber - 1) * partSize + 1;
    const rightPartPageNumber = partNumber * partSize;

    return (
        <>
            {
                partNumber > 1 &&
                <button onClick={ () => setPartNumber(partNumber - 1) }>
                    <i className="fas fa-chevron-circle-left" />
                </button>
            }
            { pages.filter(page => page >= leftPartPageNumber && page <= rightPartPageNumber)
                .map(page => {
                    return <span
                        key={ page }
                        onClick={ () => onPageChanged(page) }
                        className={ cn({ [styles.selected]: currentPage === page }, styles.pagItem ) }>
                    { page }
                </span>;
                }) }
            {
                partCount > partNumber &&
                <button onClick={ () => setPartNumber(partNumber + 1) }>
                    <i className="fas fa-chevron-circle-right" />
                </button>
            }
        </>
    );
};

export default Paginator;
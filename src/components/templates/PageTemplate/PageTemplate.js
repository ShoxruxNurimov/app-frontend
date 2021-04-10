import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.module.scss';

const cx = classNames.bind(styles);

const PageTemplate = ({header,children,responsive}) =>{
    return(
        <div className={cx('wrapper')}>
            <header>
                {header}    
            </header>
            <div className={cx('content',{
                'padding':header,responsive
            })}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;
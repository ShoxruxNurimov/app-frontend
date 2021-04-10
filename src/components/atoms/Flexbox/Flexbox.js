import React from 'react';
import classNames from 'classnames/bind';
import styles from './Flexbox.scss';

const cx = classNames.bind(styles);

const Flexbox = ({children,row,column,className, ...rest}) =>{
    return(
       <div className={cx('flexbox',{
           row,
           column,
       },className)}
       {...rest}> 
            {children}
       </div>
    );
};

export default Flexbox;
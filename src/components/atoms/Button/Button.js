import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const Button = ({children,invert,round})=>{
    return( 
        <div className={cx('button',{'round':round,invert})} >
            {children}
        </div>
    )
}

export default Button;
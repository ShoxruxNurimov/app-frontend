import React from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.scss';

const cx = classNames.bind(styles);

const Logo = () =>{
    return(
      <div className={cx('logo')}>
          Joincoin
      </div>
    );
};

export default Logo;
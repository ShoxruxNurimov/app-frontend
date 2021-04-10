import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderNav.scss';
import {Flexbox,NavItem} from '../../../components';

const cx = classNames.bind(styles);

const HeaderNav = () =>{
    return(
          <Flexbox row className={cx('header-nav')}>
                <NavItem>
                    Exchange
                </NavItem>
                <NavItem>
                    About
                </NavItem>
                <NavItem>
                    Contact
                </NavItem>
          </Flexbox>
    );
};

export default HeaderNav;
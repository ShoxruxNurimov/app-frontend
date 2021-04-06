import React, { Children } from "react";
import classNames from "classnames/bind";
import styles from "./PageTemplate.scss";

const cx = classNames.bind(styles);

const PageTemplate = ({header, children, responsive,}) => {
    return (
        <div className={cx('wrapper')}>
            <header>
                {header}
            </header>
            <div className={cx('content',{
                'has-header':header, responsive
            })}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;

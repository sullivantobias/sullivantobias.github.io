import React from "react";

import classNames from "classnames";

import style from './title.module.scss';

const Title = ({ title, tag, className }) => {
    const CustomTitle = tag ? `h${ tag }` : 'h1';

    return (
            <CustomTitle className={ classNames(style.Title, {
                [className]: className
            }) }>
                { title }
            </CustomTitle>
    )
};

export default Title;
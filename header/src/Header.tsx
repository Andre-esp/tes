import React from "react";
import style from "./header-css.module.css";

const Header = () => (
        <div>
            <ul className={style.headerList}>
                <li className={style.headerList__item}>
                    <a className={style.link} href="#">Главная</a>
                </li>
                <li className={style.headerList__item}>
                    <a className={style.link} href="#">Наш блог</a>
                </li>
                <li className={style.headerList__item}>
                    <a className={style.link} href="#">Карьера</a>
                </li>
                <li className={style.headerList__item}>
                    <a className={style.link} href="#">О нас</a> 
                </li>
            </ul>
        </div>)

export default Header
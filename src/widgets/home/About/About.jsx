/** @format */

"use client";

import Designed from "@features/global/Designed/Designed";
import Link from "next/link";
import style from "./About.module.scss";
import { useState } from "react";
import logo from "@public/assets/icons/logo.svg?url";
import useMediaQuery from "@app/hooks/useMediaQuery";
// import useDevice from '@app/hooks/useDevice'

const links = [
  {
    text: "Основные сведения",
    href: "/our-colleage/basic-information",
  },
  {
    text: "Структура и органы управления образовательной организацией",
    href: "/our-colleage/structure",
  },
  { text: "Документы", href: "/", isList: true },
  { text: "Образование", href: "/", isList: true },
  {
    text: "Руководство",
    href: "/",
    isList: true,
  },
  {
    text: "Педагогический состав",
    href: "/",
    isList: true,
  },
  {
    text: "Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда",
    href: "/our-colleage/logistics",
  },
  { text: "Платные образовательные услуги", href: "/our-colleage/paid" },
  {
    text: "Финансово-хозяйственная деятельность",
    href: "/our-colleage/financial-economic",
  },
  {
    text: "Вакантные места для приёма (перевода) обучающихся",
    href: "/our-colleage/vacancies",
  },
  { text: "Стипендии и меры поддержки обучающихся", href: "/", isList: true },
  { text: "Международное сотрудничество", href: "/our-colleage/international" },
  {
    text: "Организация питания в образовательной организации",
    href: "/nutrition",
  },
  { text: "Образовательные стандарты и требования", href: "/", isList: true },
];

function About() {
  // const device = useDevice()

  const [activeSubMenu, setActiveSubMenu] = useState(
    Array(links.length).fill("")
  );

  let isMobile = useMediaQuery("(max-width: 768px)");
  // if (device?.isMobile) {
  //   isMobile = device?.isMobile || false
  // }

  const mobileHandleClick = (linkText, index) => {
    if (!isMobile) return;

    setActiveSubMenu((prevActiveSubMenu) => {
      const newActiveSubMenu = [...prevActiveSubMenu];
      const isOpened = newActiveSubMenu[index];

      if (isOpened) {
        newActiveSubMenu[index] = "";
        return newActiveSubMenu;
      }

      newActiveSubMenu.map((item, index) => {
        if (!item) return;
        newActiveSubMenu[index] = "";
      });

      newActiveSubMenu[index] = linkText;
      return newActiveSubMenu;
    });
  };

  const handleMouseEnter = (linkText, index) => {
    if (isMobile) return;

    setActiveSubMenu((prevActiveSubMenu) => {
      const newActiveSubMenu = [...prevActiveSubMenu];
      newActiveSubMenu[index] = linkText;
      return newActiveSubMenu;
    });
  };

  const handleMouseLeave = (index) => {
    if (isMobile) return;

    setActiveSubMenu((prevActiveSubMenu) => {
      const newActiveSubMenu = [...prevActiveSubMenu];
      newActiveSubMenu[index] = "";
      return newActiveSubMenu;
    });
  };

  return (
    <section className={style.about}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.logo}>
            <img src={logo.src} />
          </div>
          <p className={style.title}>Современное образование!</p>
        </div>

        <div className={style.data}>
          <div className={style.card}>
            <p className={style.subInfoTop}>более</p>
            <p className={style.mainInfo}>2000</p>
            <p className={style.subInfoBottom}>студентов</p>
          </div>
          <div className={style.card}>
            <p className={style.subInfoTop}>всего</p>
            <p className={style.mainInfo}>10</p>
            <p className={style.subInfoBottom}>специальностей</p>
          </div>
          <div className={style.card}>
            <p className={style.subInfoTop}>заинтересованных</p>
            <p className={style.mainInfo}>200+</p>
            <p className={style.subInfoBottom}>работодателей</p>
          </div>
        </div>

        <Link href="/enrollee" className={style.getEducationButton}>
          Получи востребованную специальность!
        </Link>

        <div>
          <ul className={style.links}>
            {links.map((link, index) => (
              <li
                key={index}
                className={style.link}
                onMouseEnter={() => handleMouseEnter(link.text, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => mobileHandleClick(link.text, index)}
              >
                {link.isList ? (
                  <>
                    {link.text}

                    {activeSubMenu[index] === "Документы" ? (
                      <ul
                        className={style.subLinks}
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/our-colleage/charter">
                            Устав образовательной организации
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/routine-rules">
                            Правила внутреннего распорядка обучающихся
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/labor-regulations">
                            Правила внутреннего трудового распорядка
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/collective-agreement">
                            Коллективный договор
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/local-act">
                            Локальные нормативные акты образовательной
                            организации по основным вопросам организации и
                            осуществления образовательной деятельности
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/self-examination-report">
                            Отчет о результатах самообследования
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/authority-regulations">
                            Предписания органов, осуществляющих контроль
                            (надзор) в сфере образования
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] === "Образование" ? (
                      <ul
                        className={style.subLinks}
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/our-colleage/realized-programs">
                            Реализуемые образовательные программы
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/desc-programs">
                            Описание образовательных программ
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/students-count">
                            Численность обучающихся
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/admission-results">
                            Сведения о результатах приема
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/translation-results">
                            Сведения о результатах перевода
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/results-reinstatement-expulsion">
                            Сведения о результатах восстановления и отчисления
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-colleage/union">
                            Учебно-методические объединения
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] ===
                      "Образовательные стандарты и требования" ? (
                      <ul
                        className={style.subLinks}
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/our-colleage/education-standarts">
                            Федеральные государственные образовательные
                            стандарты
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] === "Руководство" ? (
                      <ul
                        className={style.subLinks}
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/our-colleage/management">
                            Руководство
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] === "Педагогический состав" ? (
                      <ul
                        className={style.subLinks}
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/our-colleage/pedagogical-staff">
                            Педагогический (научно-педагогический) состав
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] ===
                      "Стипендии и меры поддержки обучающихся" ? (
                      <ul
                        className={style.subLinks}
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/our-colleage/scholarship">
                            О наличии и условиях предоставления обучающимся
                            стипендий
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/social-support">
                            О мерах социальной поддержки
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/availability-hostel">
                            О наличии общежития
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/dormitory-rooms-count">
                            О количестве жилых помещений в общежитии
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/dormitory-pay">
                            О формировании платы за проживание в общежитии
                          </Link>
                        </li>

                        <li>
                          <Link href="/our-colleage/employment">
                            О трудоустройстве выпускников
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <Link href={link.href}>{link.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

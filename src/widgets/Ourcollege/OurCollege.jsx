import Link from "next/link";
import style from "./OurCollege.module.scss";
import mainImg from "@public/assets/images/our-colleage/our-colleage-1.png";
import secondImg from "@public/assets/images/our-colleage/our-colleage-2.png";
import dormitoryImg from "@public/assets/images/our-colleage/our-colleage-3.png";

const OurCollege = () => {
  return (
    <main className={style.our__colleage}>
      <section className={style.our__colleage__main}>
        <img src={mainImg.src} alt="Главный корпус" />

        <p>
          Государственное бюджетное профессиональное образовательное учреждение
          Республики Крым «Симферопольский политехнический колледж», создано
          Советом министров Республики Крым на основании распоряжения от
          09.12.2014 № 1326-р «О создании Государственных бюджетных учреждений
          Республики Крым», приказа Министерства образования, науки и молодежи
          Республики Крым от 11.12.2014 №349 «О государственных бюджетных
          учреждениях Республики Крым».
        </p>

        <p>
          Государственное бюджетное профессиональное образовательное учреждение
          Республики Крым «Симферопольский политехнический колледж», создано на
          базе Симферопольского колледжа Национального университета пищевых
          технологий, код ЕГРПОУ 00389145 был зарегистрирован 08 февраля 2012 г.
          Голосеевской районной государственной администрацией г. Киева.
        </p>

        <p>
          Учредителем учреждения и собственником его имущества является
          Республика Крым. Функции и полномочия учредителя учреждения в
          соответствии с законодательством Российской Федерации и
          законодательством Республики Крым осуществляет Министерство
          образования, науки и молодежи Республики Крым.
        </p>
        <p>
          Колледж реализует образовательные программы среднего профессионального
          образования (подготовки квалифицированных рабочих, служащих и
          подготовки специалистов среднего звена) технического,
          технологического, информационного, экономического профилей и сферы
          обслуживания, а также основные общеобразовательные программы –
          среднего общего образования. Колледж проводит подготовку по 9
          специальностям по дневной и заочной формам обучения на государственной
          и коммерческой основе.
        </p>
        <p>
          Управление колледжем осуществляется в соответствии с нормативными
          правовыми актами Российской Федерации и Республики Крым, Уставом
          Колледжа. Управление учреждением осуществляется на основе сочетания
          принципов единоначалия и коллегиальности. Руководителем учреждения
          является директор. В учреждении сформированы коллегиальные органы
          управления: Конференция работников и Педагогический совет.
        </p>
        <p>
          ГБПОУ РК «Симферопольский политехнический колледж» располагает
          современной материально-технической базой, мощным компьютерным парком,
          обширной библиотекой с электронными вариантами учебной литературы.
          Учебный процесс проводят высокопрофессиональные штатные преподаватели.
        </p>
        <p>
          Студенты во внеаудиторное время могут посещать разнообразные
          факультативы и спортивные секции, участвовать в культурно-массовых
          мероприятиях. Всем желающим иногородним студентам предоставляется
          благоустроенное общежитие.
        </p>
      </section>

      <section className={style.our__colleage__second}>
        <aside className={style.our__colleage__second__left}>
          <h5>График работы:</h5>
          <h5>понедельник-пятница</h5>
          <h5>с 08:00 до 16: 30</h5>
          <p>
            Второй корпус ГБПОУ РК «Симферопольского политехнического колледжа»
            находится по адресу г. Симферополь, ул. Камская,14. В нем обучаются
            студенты первых курсов всех специальностей.
          </p>
        </aside>

        <aside className={style.our__colleage__second__right}>
          <img src={secondImg.src} alt="Второй корпус" />
        </aside>
      </section>

      <section className={style.our__colleage__dormitory}>
        <img src={dormitoryImg.src} alt="Общежитие" />

        <p>
          ГБПОУ РК «Симферопольский политехнический колледж» предоставляет
          иногородним студентам 9-этажное общежитие. Для поселения студентов
          1-го курса общежитие имеет 202 места. Находится общежитие по адресу:
          г.Симферополь, ул.Камская,5. Общежитие (1985 год постройки) – блочного
          типа, на каждом этаже по 12 блоков, по 2 кухни; 2 душевых расположены
          на 5 этаже. В каждом блоке 2-х и 3-х местные комнаты, умывальная и
          туалетная комната. Проводной Интернет в каждой комнате.
        </p>
      </section>

			<Link className={style.our__colleage__link} href="/achives">Наши достижения</Link>
    </main>
  );
};


export default OurCollege;

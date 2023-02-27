import a4Outline from "../../img/a4_outline.png";
import a6Outline from "../../img/a6_outline.png";
import threeDOutline from "../../img/3d_outline.png";

import ownDesign from "../../img/own_design_outline.png";
import diploma from "../../img/diploma.png";
import certificate from "../../img/certificate.png";

export const formats = [
  {
    name: "A4",
    description: "Стандартный формат для грамот и дипломов",
    image: a4Outline,
  },
  {
    name: "A6",

    description: "Отлично подходит для сертификатов",
    image: a6Outline,
  },
  {
    name: "3D",
    description: "Объект с подписью",
    image: threeDOutline,
  },
];

export const designs = [
  {
    name: "Свой дизайн",
    description: "Как подготовить свой дизайн?",
    image: ownDesign,
  },
  {
    name: "Диджитал диплом",
    description: "Яркий шаблон цифрового диплома",
    image: diploma,
  },
  {
    name: "Кибер грамота",
    description: "Грамота в стиле киберпанк",
    image: certificate,
  },
];

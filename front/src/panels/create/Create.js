import { Fragment, useState } from "react";
import { Icon24ArrowLeftOutline } from "@vkontakte/icons";
import {
  Panel,
  PanelHeader,
  Group,
  Header,
  HorizontalScroll,
  HorizontalCell,
  PanelSpinner,
  Image,
  FormItem,
  LocaleProvider,
  DateInput,
  FormLayout,
  Button,
  Div,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import useNavigationStore from "../../store/navigationStore";
import { PropTypes } from "prop-types";
import { designs, formats } from "./data";

import "./Create.modules.scss";

const Create = ({ id }) => {
  const [value, setValue] = useState(() => new Date());
  const [enableTime, setEnableTime] = useState(false);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [closeOnChange, setCloseOnChange] = useState(true);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  const [disableCalendar, setDisableCalendar] = useState(false);
  const [locale, setLocale] = useState("ru");

  const setCurrentPanel = useNavigationStore((state) => state.setCurrentPanel);

  return (
    <Panel id={id}>
      <PanelHeader
        before={
          <Icon24ArrowLeftOutline onClick={() => setCurrentPanel("home")} />
        }
      >
        Создание коллекции
      </PanelHeader>
      <Group header={<Header mode="secondary">Выберите формат</Header>}>
        <HorizontalScroll
          showArrows
          getScrollToLeft={(i) => i - 120}
          getScrollToRight={(i) => i + 120}
        >
          <div style={{ display: "flex" }}>
            {formats.map((item, index) => {
              return (
                <HorizontalCell
                  key={index}
                  size="l"
                  header={item.name}
                  subtitle={item.description}
                >
                  <Image
                    style={{ borderRadius: 8 }}
                    size={140}
                    src={item.image}
                  />
                </HorizontalCell>
              );
            })}
          </div>
        </HorizontalScroll>
      </Group>

      <Group
        header={<Header mode="secondary">Загрузите или выберите дизайн</Header>}
      >
        <HorizontalScroll
          showArrows
          arrowSize="m"
          getScrollToLeft={(i) => i - 120}
          getScrollToRight={(i) => i + 120}
        >
          <div style={{ display: "flex" }}>
            {designs.map((item, index) => {
              return (
                <HorizontalCell
                  size="l"
                  key={index}
                  header={item.name}
                  subtitle={item.description}
                >
                  <Image size={140} src={item.image} />
                </HorizontalCell>
              );
            })}
          </div>
        </HorizontalScroll>
      </Group>
      <Group>
        <FormLayout>
          <FormItem
            top="Загрузите ФИО и VK ID"
            bottom="Загрузите данные о получателях сертификатов в формате .txt, каждый участник на новой строке Иванов Иван Иванович + VKID"
          >
            <input type="file" />
          </FormItem>
          <FormItem
            top="Задайте дату публикации"
            bottom="В назначенное время участники получат ссылку на минт, а ваша коллекция будет опубликована"
          >
            <div style={{ display: "flex" }}>
              <LocaleProvider value={locale}>
                <DateInput
                  value={value}
                  onChange={setValue}
                  enableTime={enableTime}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  closeOnChange={closeOnChange}
                  disablePickers={disablePickers}
                  showNeighboringMonth={showNeighboringMonth}
                  disableCalendar={disableCalendar}
                />
              </LocaleProvider>
            </div>
          </FormItem>
        </FormLayout>
      </Group>
      <Button stretched>Опубликовать коллекцию</Button>
    </Panel>
  );
};

Create.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Create;

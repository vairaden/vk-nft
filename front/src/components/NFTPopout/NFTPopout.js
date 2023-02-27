import {
  Card,
  PopoutWrapper,
  Button,
  ButtonGroup,
  Header,
} from "@vkontakte/vkui";
import { Icon20CopyOutline } from "@vkontakte/icons";
import { PropTypes } from "prop-types";
import cover from "../../img/cover.png";
import usePopoutStore from "../../store/usePopoutStore";

import "./NFTPopout.modules.scss";
const NFTPopout = ({ name, description }) => {
  const setPopout = usePopoutStore((state) => state.setPopout);

  return (
    <PopoutWrapper
      onClick={() => {
        setPopout(null);
      }}
    >
      <Card id="popoutCard">
        <img src={cover} />
        <h3>{name}</h3>
        <p>{description}</p>
        <ButtonGroup align="center">
          <Button
            size="l"
            onClick={() => {
              setPopout(null);
            }}
          >
            Назад
          </Button>
          <Button size="l" after={<Icon20CopyOutline />}>
            Скопировать
          </Button>
        </ButtonGroup>
      </Card>
    </PopoutWrapper>
  );
};

NFTPopout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NFTPopout;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon16Add } from "@vkontakte/icons";
import cover from "../../img/cover.png";
import trophy from "../../img/trophy.png";
import useNavigationStore from "../../store/navigationStore";
import { BrowserProvider } from "ethers";
import "./Home.modules.scss";
import {
  Panel,
  Button,
  ContentCard,
  Tabs,
  TabsItem,
  Card,
  CardGrid,
  Div,
  Group,
  Header,
} from "@vkontakte/vkui";
import useWalletsStore from "../../store/walletsStore";
import usePopoutStore from "../../store/usePopoutStore";
import NFTPopout from "../../components/NFTPopout/NFTPopout";

const Home = ({ id, setWalletSelectionOpen }) => {
  const setCurrentPanel = useNavigationStore((state) => state.setCurrentPanel);
  const wallets = useWalletsStore((state) => state.wallets);
  const selectedWallet = useWalletsStore((state) => state.selectedWallet);
  const setSelectedWallet = useWalletsStore((state) => state.setSelectedWallet);
  const setWallets = useWalletsStore((state) => state.setWallets);
  const setPopout = usePopoutStore((state) => state.setPopout);
  const [selectedTab, setSelectedTab] = useState("collections");

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallets(accounts);
        setSelectedWallet(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function connectWallet() {
    if (window.ethereum) {
      await requestAccount();
      const provider = new BrowserProvider(window.ethereum);
      console.log(provider);
    }
  }

  return (
    <Panel id={id}>
      <CardGrid size="l" className="cardGrid">
        <Card mode="tint" id="createCollectionCard">
          <img id="trophyImage" src={trophy} />
          <Header mode="secondary">Создайте свою коллекцию</Header>
          <Div>
            <p>
              Вы можете создать свой набор сертификатов под ваше мероприятие
            </p>
            <Button
              className="primaryButton"
              stretched
              size="l"
              onClick={() => setCurrentPanel("create")}
              before={<Icon16Add />}
            >
              Создать сертификаты
            </Button>
          </Div>
        </Card>
      </CardGrid>
      <Group
        header={
          <Header mode="secondary">
            {wallets.length > 0 ? "Выбранный кошелёк" : "Подключите кошелек"}
          </Header>
        }
      >
        {wallets.length > 0 ? (
          <Div className="flexColContainer">
            <p className="noWrap">{selectedWallet}</p>
            <Button size="s" onClick={() => setWalletSelectionOpen(true)}>
              Изменить
            </Button>
          </Div>
        ) : (
          <Div className="flexColContainer">
            <p>Кошелек нужен для связи с децентрализованной сетью</p>
            <Button size="s" onClick={connectWallet}>
              Подключить
            </Button>
          </Div>
        )}
      </Group>
      <Tabs className="tabs">
        <TabsItem
          selected={selectedTab === "collections"}
          onClick={() => setSelectedTab("collections")}
        >
          Мои коллекции
        </TabsItem>
        <TabsItem
          selected={selectedTab === "achievements"}
          onClick={() => setSelectedTab("achievements")}
        >
          Мои достижения
        </TabsItem>
      </Tabs>
      <CardGrid size="l">
        <ContentCard
          onClick={() => {
            setPopout(
              <NFTPopout
                name="Цифровой прорыв"
                description="Описание награды"
              />
            );
          }}
          src={cover}
          header="Цифровой прорыв"
          caption="15.05.2023"
        />
        <ContentCard
          onClick={() => {
            setPopout(
              <NFTPopout
                name="Цифровой прорыв"
                description="Описание награды"
              />
            );
          }}
          src={cover}
          header="Цифровой прорыв"
          caption="15.05.2022"
        />
        <ContentCard
          onClick={() => {
            setPopout(
              <NFTPopout
                name="Цифровой прорыв"
                description="Описание награды"
              />
            );
          }}
          src={cover}
          header="Цифровой прорыв"
          caption="15.05.2021"
        />
      </CardGrid>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  setWalletSelectionOpen: PropTypes.func.isRequired,
};

export default Home;

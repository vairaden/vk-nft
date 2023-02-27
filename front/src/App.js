import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  ModalCard,
  ModalRoot,
  Button,
  Div,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/home/Home";
import Create from "./panels/create/Create";
import useNavigationStore from "./store/navigationStore";
import { useState } from "react";
import useWalletsStore from "./store/walletsStore";
import usePopoutStore from "./store/usePopoutStore";
const App = () => {
  const [walletSelectionOpen, setWalletSelectionOpen] = useState(false);
  const currentPanel = useNavigationStore((state) => state.currentPanel);
  const wallets = useWalletsStore((state) => state.wallets);
  const setSelectedWallet = useWalletsStore((state) => state.setSelectedWallet);
  const popout = usePopoutStore((state) => state.popout);

  const modal = (
    <ModalRoot activeModal={walletSelectionOpen && "walletSelection"}>
      <ModalCard
        id="walletSelection"
        onClose={() => setWalletSelectionOpen(false)}
      >
        <p>Выбор кошельков</p>
        {wallets.map((wallet) => (
          <Button
            onClick={() => {
              setSelectedWallet(wallet);
              setWalletSelectionOpen(false);
            }}
            style={{ marginBottom: "0.5rem" }}
            stretched
            key={wallet}
          >
            {wallet}
          </Button>
        ))}
      </ModalCard>
    </ModalRoot>
  );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            popout={popout}
            modal={modal}
            style={{ justifyContent: "center" }}
          >
            <SplitCol width="100%" maxWidth="400px" autoSpaced>
              <View activePanel={currentPanel}>
                <Home
                  id="home"
                  setWalletSelectionOpen={setWalletSelectionOpen}
                />
                <Create id="create" />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;

import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import Modal from "./components/Modal/Modal";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";

type ModalCtxProps = {
  isModalOpen: boolean;
};

interface CtxProps {
  modal: ModalCtxProps;
}

export const CTX = createContext<CtxProps>("store");

export const Stores = component$(() => {
  const store = useStore({
    modal: { isModalOpen: false },
  });

  useContextProvider(CTX, store);

  return <Root />;
});

export const Root = component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <Modal />
      </body>
    </QwikCity>
  );
});

export default Stores;

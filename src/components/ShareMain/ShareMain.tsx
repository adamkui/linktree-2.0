import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import Share from "~/icons/Share/Share";
import { CTX } from "~/root";
import styles from "./ShareMain.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const store = useContext(CTX);

  return (
    <div
      className={"shareMain"}
      onClick$={() => {
        store.modal = { isModalOpen: true };
      }}
    >
      <Share />
    </div>
  );
});

import {
  component$,
  useContext,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import Close from "~/icons/Close/Close";
import { CTX } from "~/root";
import ModalShareRow, { SocialPlatform } from "../ModalShareRow/ModalShareRow";
import styles from "./Modal.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    isCopied: false,
  });

  const store = useContext(CTX);

  const baseUrl = "https://linktree.adamkui.hu/";

  return (
    <div
      className={`modal_background ${
        store.modal.isModalOpen ? "modal_open" : "modal_closed"
      }`}
      onClick$={() => (store.modal = { isModalOpen: false })}
    >
      <div className="modal" onClick$={(e) => e.stopPropagation()}>
        <span
          className="close"
          onClick$={() => {
            state.isCopied = false;
            store.modal = { isModalOpen: false };
          }}
        >
          <Close />
        </span>
        <div className="modal_header">{"Share this linktree"}</div>
        <div className="modal_links">
          {Object.values(SocialPlatform).map((social) => (
            <ModalShareRow social={social} />
          ))}
        </div>
        <div
          className="modal_body"
          onClick$={() => {
            navigator.clipboard.writeText(window.location.href);
            state.isCopied = true;
          }}
        >
          <div className="copylogo">🔗</div>
          <p>{baseUrl}</p>
          <span className={`copybutton ${state.isCopied ? "copied" : ""}`}>
            {state.isCopied ? "Copied!" : "Copy"}
          </span>
        </div>
        <div className="modal_footer"></div>
      </div>
    </div>
  );
});

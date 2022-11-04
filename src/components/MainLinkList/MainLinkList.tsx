import { component$, useStylesScoped$ } from "@builder.io/qwik";
import CopyLinkButton, {
  CopyLinkVariant,
} from "../MainLinkButton/MainLinkButton";
import styles from "./MainLinkList.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className={"linklist"}>
      {Object.values(CopyLinkVariant).map((variant) => (
        <CopyLinkButton variant={variant as CopyLinkVariant} />
      ))}
    </div>
  );
});

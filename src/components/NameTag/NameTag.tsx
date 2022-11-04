import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./NameTag.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return <h1 className="nametag">{"@adamkui"}</h1>;
});

import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Avatar from "../Avatar/Avatar";
import Introduction from "../Introduction/Introduction";
import Nametag from "../NameTag/NameTag";
import styles from "./Header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <Avatar />
      <Nametag />
      <Introduction />
    </header>
  );
});

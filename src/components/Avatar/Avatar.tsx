import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Avatar.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return <img className="avatar" src="profile.webp" alt="avatar" />;
});

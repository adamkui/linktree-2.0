import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "~/icons/Logo/Logo";
import styles from "./LogoWithLabel.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className="logoWithLabel">
      <Logo />
      <h1>Adam Kui</h1>
    </div>
  );
});

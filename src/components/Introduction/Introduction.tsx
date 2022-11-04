import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Introduction.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className="introduction">
      <p>
        Hello there! 👋 I'm a frontend software developer, based in Budapest,
        Hungary. Please check my website to see read about my story, browse my
        portfolio, or feel free to follow or contact me on any of the platforms
        below.
      </p>
    </div>
  );
});

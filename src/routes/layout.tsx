import { component$, Slot } from "@builder.io/qwik";
import LogoWithLabel from "~/components/LogoWithLabel/LogoWithLabel";
import ShareMain from "~/components/ShareMain/ShareMain";
import Header from "../components/Header/Header";

export default component$(() => {
  return (
    <>
      <main>
        <ShareMain />
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <LogoWithLabel />
        <p>Copyright © 2022 Adam Kui. All Rights Reserved.</p>
        <a href="https://qwik.builder.io/" target="_blank">
          {"Made with Qwik"}
        </a>
      </footer>
    </>
  );
});

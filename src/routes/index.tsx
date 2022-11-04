import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Linklist from "~/components/MainLinkList/MainLinkList";

export default component$(() => {
  return (
    <div>
      <Linklist />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Adam Kui | Linktree",
};

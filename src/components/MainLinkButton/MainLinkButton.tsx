import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import BoxSeam from "~/icons/BoxSeam/BoxSeam";
import CodeSlash from "~/icons/CodeSlash/CodeSlash";
import Discord from "~/icons/Discord/Discord";
import FileEarmark from "~/icons/FileEarmark/FileEarmark";
import GitHub from "~/icons/GitHub/GitHub";
import Globe from "~/icons/Globe/Globe";
import LinkedinMain from "~/icons/LinkedinMain/LinkedinMain";
import EnvelopePlus from "../EnvelopePlus/EnvelopePlus";
import styles from "./MainLinkButton.css?inline";

interface LinkProps {
  variant: CopyLinkVariant;
}

export enum CopyLinkVariant {
  WEBSITE = "WEBSITE",
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  NPMJS = "NPMJS",
  CODERSRANK = "CODERSRANK",
  EMAIL = "EMAIL",
  DISCORD = "DISCORD",
}

export default component$(({ variant }: LinkProps) => {
  useStylesScoped$(styles);

  const state = useStore({ isCopied: false });

  const dataForLink = {
    WEBSITE: {
      href: "https://adamkui.hu",
      text: "Website",
      icon: Globe,
    },
    LINKEDIN: {
      href: "https://linkedin.com/in/adamkui",
      text: "LinkedIn",
      icon: LinkedinMain,
    },
    GITHUB: {
      href: "https://github.com/adamkui",
      text: "GitHub",
      icon: GitHub,
    },
    NPMJS: {
      href: "https://www.npmjs.com/~adamkui",
      text: "NpmJs",
      icon: BoxSeam,
    },
    CODERSRANK: {
      href: "https://profile.codersrank.io/user/adamkui",
      text: "Codersrank",
      icon: CodeSlash,
    },
    EMAIL: {
      href: "mailto:addam.kui@gmail.com?subject:Email from Linktree -",
      text: "Email",
      icon: EnvelopePlus,
    },
    DISCORD: {
      href: "https://discordapp.com/users/1017717778813308928",
      text: "Discord",
      icon: Discord,
    },
  };

  const IconToUse = dataForLink[variant].icon;
  const href = dataForLink[variant].href;

  return (
    <a
      className="linkbutton"
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      key={href}
      onFocusout$={() => (state.isCopied = false)}
    >
      <div className="row">
        <div className="icon">{<IconToUse />}</div>
        <div className="text">{dataForLink[variant].text}</div>
        <div className="button-container">
          <span
            preventdefault:click
            className={state.isCopied ? "copied" : ""}
            onClick$={() => {
              state.isCopied = true;
              navigator.clipboard.writeText(href);
            }}
          >
            {state.isCopied ? "Copied!" : <FileEarmark />}
          </span>
        </div>
      </div>
    </a>
  );
});

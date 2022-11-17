import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ChevronRight from "~/icons/ChevronRight/ChevronRight";
import Email from "~/icons/Email/Email";
import Facebook from "~/icons/Facebook/Facebook";
import Linkedin from "~/icons/Linkedin/Linkedin";
import Messenger from "~/icons/Messenger/Messenger";
import Twitter from "~/icons/Twitter/Twitter";
import WhatsApp from "~/icons/WhatsApp/WhatsApp";
import styles from "./ModalShareRow.css?inline";

interface ShareRowProps {
  social: SocialPlatform;
}

export enum SocialPlatform {
  FACEBOOK = "FACEBOOK",
  LINKEDIN = "LINKEDIN",
  TWITTER = "TWITTER",
  WHATSAPP = "WHATSAPP",
  MESSENGER = "MESSENGER",
  EMAIL = "EMAIL",
}

export default component$(({ social }: ShareRowProps) => {
  useStylesScoped$(styles);

  const baseUrl = "https://linktree.adamkui.hu/";

  const dataForSocial = {
    FACEBOOK: {
      text: "Share on Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer.php?u=${baseUrl}`,
    },
    LINKEDIN: {
      text: "Share on LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}`,
    },
    TWITTER: {
      text: "Share on Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20${baseUrl}`,
    },
    WHATSAPP: {
      text: "Share via WhatsApp",
      icon: WhatsApp,
      href: `https://wa.me/?text=Check%20out%20this%20Linktree!%20-%20${baseUrl}`,
    },
    MESSENGER: {
      text: "Share via Messenger",
      icon: Messenger,
      href: `https://www.messenger.com/new`,
    },
    EMAIL: {
      text: "Share via Email",
      icon: Email,
      href: `mailto:?subject=Check out this Linktree!&body=Check out this Linktree! - ${baseUrl}`,
    },
  };

  const IconToUse = dataForSocial[social].icon;

  return (
    <a
      className="shareRow"
      href={dataForSocial[social].href}
      target={"_blank"}
      rel={"noreferrer"}
    >
      <div className="left-section">
        <IconToUse />
        <p>{dataForSocial[social].text}</p>
      </div>
      <ChevronRight />
    </a>
  );
});

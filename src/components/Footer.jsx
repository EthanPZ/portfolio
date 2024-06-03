import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

import Icon from "../ui/Icon";
import Notification from "../ui/Notification";
import copyDiscord from "../utils/copyDiscord";
import { useNotification } from "../contexts/NotificationContext";

const styles = {
  color: "#e7e5e4",
  fontSize: ".8em",
};

function Footer() {
  const { showNotification, setShowNotification } = useNotification();

  return (
    <footer className="border-t-[1px] mt-14 border-stone-500">
      <div className="max-w-screen-2xl flex flex-col sm:flex-row gap-6 sm:gap-4 items-center sm:justify-between justify-center m-auto p-pagePadding">
        <h2 className="font-semibold text-xl">EthanPZ</h2>

        <ul className="flex items-center gap-4">
          <span
            onClick={() => {
              copyDiscord();
              setShowNotification(true);
            }}
          >
            <Icon>
              <FaDiscord style={styles} />
            </Icon>
          </span>

          <a href="https://twitter.com/EthanPZ3/" target="_blank">
            <Icon>
              <FaTwitter style={styles} />
            </Icon>
          </a>

          <a href="https://github.com/EthanPZ/" target="_blank">
            <Icon>
              <FaGithub style={styles} />
            </Icon>
          </a>
        </ul>
      </div>

      <Notification msg="You've copied my discord username, now just add me and start building a great product with me!" />
    </footer>
  );
}

export default Footer;

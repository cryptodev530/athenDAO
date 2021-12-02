import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";

export default function Social() {
  const medium_link = "https://medium.com/assure-defi/assure-partners-with-athen-organizational-economics-3aa1a502a266";
  return (
    <div className="social-row">
      <Link href="https://github.com/cryptodev530" target="_blank">
        <SvgIcon color="primary" component={GitHub} />
      </Link>

      <Link href="https://t.me/officialAOE" target="_blank">
        <SvgIcon color="primary" component={Telegram} />
      </Link>

      <Link href={medium_link} target="_blank">
        <SvgIcon color="primary" component={Medium} />
      </Link>

      <Link href="https://twitter.com/athen_official" target="_blank">
        <SvgIcon color="primary" component={Twitter} />
      </Link>

      {/* <Link href="https://discord.me/hector" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link> */}
    </div>
  );
}

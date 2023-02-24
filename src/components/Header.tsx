import clsx from "clsx";
import { createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { socials } from "~/constants";

function Header() {
  const [open, setOpen] = createSignal(false);
  const pathname = isServer ? "" : location.pathname;
  return (
    <header class="z-2 w-full bg-[#000814]">
      <MobileNav isOpen={open()} close={() => setOpen(false)} />
      <nav class="flex h-[60px] items-center justify-between px-4 md:px-32 2xl:px-44">
        <a href="/">
          <img src="/logos/sparky.svg" alt="logo" class="h-[50px] w-[50px]" />
        </a>
        <button class="md:hidden" onClick={() => setOpen(true)}>
          <img
            src="/icons/hamburger.svg"
            alt="toggle-icon"
            width="20px"
            height="20px"
          />
        </button>
        <ul class="hidden space-x-6 md:flex">
          <li>
            <a
              href="/"
              class={clsx([
                "text-lg",
                {
                  "text-teal-200":
                    pathname === "/" || pathname.startsWith("/domain"),
                },
              ])}
            >
              Ecosystem
            </a>
          </li>
          <li class="flex items-center space-x-1">
            <a
              href="/articles/1"
              class={clsx([
                "text-lg",
                {
                  "text-teal-200":
                    pathname.startsWith("/articles") ||
                    pathname.startsWith("/videos"),
                },
              ])}
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MobileNav(props: { isOpen: boolean; close: () => void }) {
  const pathname = isServer ? "" : location.pathname;
  return (
    <nav
      class={clsx([
        "fixed z-10 flex h-screen w-screen flex-col justify-between overflow-hidden bg-[#000d0a]",
        { hidden: !props.isOpen },
      ])}
    >
      <ul class="flex flex-col">
        <div class="flex h-[60px] items-center justify-between px-4 md:px-16">
          <a href="/">
            <img src="/logos/sparky.svg" alt="logo" class="h-[50px] w-[50px]" />
          </a>
          <button class="md:hidden" onClick={props.close}>
            <img
              src="/icons/hamburger.svg"
              alt="toggle-icon"
              width="20px"
              height="20px"
            />
          </button>
        </div>
        <div class="h-[1px] bg-gradient-to-r from-[#000d0a] via-teal-200 to-[#000d0a]" />
        <li>
          <a
            href="/"
            class={clsx([
              "flex h-14 w-full items-center justify-center text-xl",
              "border-b-[0.1px] border-b-teal-200/20",
              {
                "text-teal-200":
                  pathname === "/" || pathname.startsWith("/domain"),
              },
            ])}
          >
            Ecosystem
          </a>
        </li>
        <li>
          <a
            href="/articles/1"
            class={clsx([
              "flex h-14 w-full items-center justify-center text-xl",
              "border-b-[0.1px] border-b-teal-200/20",
              {
                "text-teal-200":
                  pathname.startsWith("/articles") ||
                  pathname.startsWith("/videos"),
              },
            ])}
          >
            Resources
          </a>
        </li>
      </ul>
      <ul class="mb-8 flex justify-center space-x-2">
        <li
          class={clsx([
            "p-1",
            "rounded-full border-[0.1px] border-teal-200/20",
            "hover:duration-400 hover:bg-teal-200/10",
          ])}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={socials.fuellabs.twitter}
          >
            <img
              src="/icons/twitter.svg"
              alt="twitter"
              width="35px"
              height="35px"
            />
          </a>
        </li>
        <li
          class={clsx([
            "p-1",
            "rounded-full border-[0.1px] border-teal-200/20",
            "hover:duration-400 hover:bg-teal-200/10",
          ])}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={socials.fuellabs.discord}
          >
            <img
              src="/icons/discord.svg"
              alt="discord"
              width="35px"
              height="35px"
            />
          </a>
        </li>
        <li
          class={clsx([
            "p-1",
            "rounded-full border-[0.1px] border-teal-200/20",
            "hover:duration-400 hover:bg-teal-200/10",
          ])}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={socials.fuellabs.website}
          >
            <img
              src="/icons/globe.svg"
              alt="website"
              width="35px"
              height="35px"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

import Image from "next/image";
import type { ReactElement } from "react";

import VelocityIcon from "@/assets/brand/velocity.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import CommunityImage from "@/assets/images/community.png";
import HomeImage1 from "@/assets/images/home-1.png";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const VelocityHome = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Velocity"
        description="Velocity is the modern, high-performance proxy. Boasting unparalleled speed and next-level design, it’s a full alternative to Waterfall with its own plugin ecosystem."
        keywords={[
          "velocity",
          "proxy",
          "minecraft",
          "performance",
          "bungeecord",
        ]}
      />
      <SoftwareHeader
        id="velocity"
        name="Velocity"
        versionGroup={project.latestVersionGroup}
        icon={VelocityIcon}
        header={<>Next generation speed and capability</>}
        description="Velocity is the modern, high-performance proxy. Boasting unparalleled speed and next-level design, it’s a full alternative to Waterfall with its own plugin ecosystem."
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            Why Velocity?
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label="Out with the old, in with the new"
              description="Velocity is the best proxy software available. Boasting much expanded capabilities due to next-level technical design, it runs laps around BungeeCord."
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label="An active and growing community"
              description="Velocity has an active and growing community of server administrators and developers. If you encounter any problems, you can come talk with us on Discord and get real time support."
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label="Plenty of plugins to choose from"
              description="While BungeeCord has more third-party software due to its longer life so far, Velocity isn’t lacking in the essentials. With enough to get going and more added every day, Velocity has what you need."
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage1}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              Getting Started
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              To get started with Velocity, you will need to download and
              install the latest version of the server software. Once
              you&apos;re ready, take a look at our extensive documentation!
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button variant="filled" href="/downloads/velocity" dense>
                Downloads
              </Button>
              <Button
                variant="outlined"
                href="https://docs.papermc.io/velocity/getting-started"
                external
                dense
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl aspect-video relative overflow-clip">
            <Image
              alt=""
              src={CommunityImage}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Together with a community of server owners
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              Whether you need help with your settings, server lag, or need a
              guide for formatting your chat, our knowledgeable staff and
              friendly community are always around to lend a hand.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="https://discord.gg/papermc"
                external
                dense
              >
                Join our Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

VelocityHome.softwareProps = {
  github: "https://github.com/PaperMC/Velocity",
};

export default VelocityHome;

export const getStaticProps = getProjectProps("velocity");

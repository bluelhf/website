import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";

import ChevronDownIcon from "@/assets/icons/heroicons/chevron-down.svg";
import DocumentDownloadIcon from "@/assets/icons/heroicons/document-download.svg";
import Skeleton from "@/components/data/Skeleton";
import { DownloadsContext } from "@/lib/context/downloads";
import { getVersionBuildDownloadURL } from "@/lib/service/v2";

const SoftwareDownloadButton = () => {
  const { projectId, project, builds } = useContext(DownloadsContext);

  const latestBuild = builds && builds[builds.length - 1];
  const [copied, setCopied] = useState("");

  return (
    <Menu as="div" className="relative w-full">
      <div className="rounded-lg flex flex-row w-full md:w-100 bg-blue-600 transition-shadow text-white transition-color hover:shadow-lg">
        <a
          className="flex flex-row flex-1 items-center gap-8 pl-5 py-3"
          href={
            project &&
            latestBuild &&
            getVersionBuildDownloadURL(
              projectId,
              project.latestVersion,
              latestBuild.build,
              latestBuild.downloads["application"].name
            )
          }
          rel="noreferrer"
          target="_blank"
        >
          <div className="w-8 h-8">
            <DocumentDownloadIcon />
          </div>
          <div className="text-left flex-1 border-r border-gray-300/50">
            {project && builds && latestBuild ? (
              <>
                <span className="font-medium text-lg">
                  {project.name} {project.latestVersion}
                </span>
                <p className="text-gray-100">
                  {latestBuild && `Build #${latestBuild.build}`}
                </p>
              </>
            ) : (
              <>
                <Skeleton className="w-40 mb-2" />
                <Skeleton className="w-20 h-5" />
              </>
            )}
          </div>
        </a>
        <Menu.Button aria-label="Other download variants">
          <ChevronDownIcon className="w-6 h-6 text-gray-200 mx-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 origin-top-left rounded-md bg-background-light-10 shadow-lg divide-y divide-gray-200 border border-gray-200 w-full md:w-auto dark:(bg-background-dark-80 divide-gray-800 border-gray-800)">
          {latestBuild &&
            Object.entries(latestBuild.downloads).map(([name, download]) => (
              <Menu.Item key={name}>
                {() => (
                  <div className="hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                    <a
                      href={
                        project &&
                        latestBuild &&
                        getVersionBuildDownloadURL(
                          projectId,
                          project.latestVersion,
                          latestBuild.build,
                          download.name
                        )
                      }
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className="px-4 py-3">
                        <div className="font-medium">
                          {download.name}
                          {name === "application" && (
                            <span className="ml-2 text-xs rounded-full py-0.5 px-2 bg-yellow-200/80 text-yellow-800">
                              Recommended
                            </span>
                          )}
                          {copied === download.sha256 && (
                            <span className="ml-2 text-xs rounded-full py-0.5 px-2 bg-green-200/80 text-green-800">
                              Copied
                            </span>
                          )}
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 text-xs mt-1 truncate">
                          {download.sha256}
                          <span className={"ml-1"}>
                            <button
                              className="bg-gray-200 dark:bg-gray-800"
                              onClick={(evt) => {
                                evt.preventDefault();
                                navigator.clipboard.writeText(download.sha256);
                                setCopied(download.sha256);
                                setTimeout(() => setCopied(""), 2000);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 512 512"
                                fill="#fefefe"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SoftwareDownloadButton;

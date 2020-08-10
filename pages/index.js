import SelectorIcon from "heroicons/solid/selector.svg";
import DotsHorizontalIcon from "heroicons/solid/dots-horizontal.svg";
import Link from "next/link";

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 116 100"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.5 0L115 100H0L57.5 0z"
      />
    </svg>
  );
}

function GitHubLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      ></path>
    </svg>
  );
}

function Avatar({ src, alt = "" }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={src}
      alt={alt}
    ></img>
  );
}

function ActivityFeedItem() {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 text-sm leading-5">
        <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <span className="text-gray-600">
          <Link href="#">
            <a className="text-black hover:underline">You</a>
          </Link>{" "}
          logged in via Github
        </span>
      </div>
      <div className="text-sm leading-5 text-gray-500">
        <time dateTime="2019-04-24">26d</time>
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="rounded-lg shadow-lg">
      <div className="divide-y divde-gray-200 rounded-lg bg-white shadow overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="flex align-items justify-between">
            <h3 className="text-2xl font-semibold">next-nested-routing</h3>
            <a className="border rounded border-gray-200 px-5 py-1.5 text-sm leading-5 font-medium text-gray-500 hover:border-black transition ease-in-out duration-150">
              Visit
            </a>
          </div>
          <div className="space-y-3">
            <div
              aria-label="Production deployment"
              className="flex items-center space-x-3"
            >
              <Link href="#">
                <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                  <span
                    aria-hidden
                    className="inline-block h-2.5 w-2.5 rounded-full bg-green-300"
                  ></span>
                  <span>shamelesscomfort.com</span>
                </a>
              </Link>
              <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-xs leading-4 font-medium">
                Production
              </span>
              <span className="text-sm leading-5 text-gray-500">
                <time dateTime="2019-10-29">204d</time>
              </span>
            </div>
            <div
              aria-label="Production deployment"
              className="flex items-center space-x-3"
            >
              <Link href="#">
                <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                  <span
                    aria-hidden
                    className="inline-block h-2.5 w-2.5 rounded-full bg-green-300"
                  ></span>
                  <span>next-nested-routing-5iipzp1m88.now.sh</span>
                </a>
              </Link>
              <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-xs leading-4 font-medium">
                Latest
              </span>
              <span className="text-sm leading-5 text-gray-500">
                <time dateTime="2020-04-04">46d</time>
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 py-3">
          <a
            href="#"
            className="flex items-center space-x-2 text-sm leading-5 font-bold"
          >
            <GitHubLogo className="h-4 w-4" />
            <span>dyhpoon/next-nested-routing</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <div>
      <div className="bg-white">
        <header className="border-b border-gray-200 space-y-2">
          <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between pt-4">
            <div className="flex items-center space-x-3">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-300"
                >
                  <line x1="10" y1="28" x2="22" y2="4"></line>
                </svg>
              </span>
              <span class="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                <Link href="#">
                  {/* the <a> element needs to use flex again, it got reset even we have same flex in <span> */}
                  <a className="inline-flex items-center space-x-2">
                    <span>
                      <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
                    </span>
                    <span>Darren Poon</span>
                  </a>
                </Link>
                <button
                  type="button"
                  className="border border-transparent rounded p-0.5 hover:border-gray-200 hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <SelectorIcon className="h-5 w-5 text-gray-400" />
                </button>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  className="border rounded border-gray-200 px-3 py-1.5 text-sm leading-5 text-gray-500 hover:border-black transition ease-in-out duration-150"
                >
                  Feedback
                </button>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Support
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Docs
                  </a>
                </Link>
              </div>

              <button type="button">
                <DotsHorizontalIcon className="h-5 w-5 text-gray-400" />
              </button>
              <button>
                <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
              </button>
            </div>
          </nav>

          <div className="max-w-5xl mx-auto px-6">
            {/* the -mb-px is for overlapping the highlighted line with the border */}
            <nav className="-mb-px flex text-sm leading-5 space-x-4">
              <Link href="#">
                <a className="border-b-2 border-black text-black px-0.5 py-3">
                  Overview
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent text-gray-500 px-0.5 py-3 hover:text-black transition ease-in-out duration-150">
                  Projects
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent text-gray-500 px-0.5 py-3 hover:text-black transition ease-in-out duration-150">
                  Integrations
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent text-gray-500 px-0.5 py-3 hover:text-black transition ease-in-out duration-150">
                  Activity
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent text-gray-500 px-0.5 py-3 hover:text-black transition ease-in-out duration-150">
                  Domains
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent text-gray-500 px-0.5 py-3 hover:text-black transition ease-in-out duration-150">
                  Usage
                </a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent text-gray-500 px-0.5 py-3 hover:text-black transition ease-in-out duration-150">
                  Settings
                </a>
              </Link>
            </nav>
          </div>
        </header>

        <div className="max-w-5xl mx-auto flex items-start justify-between px-6 pt-14 pb-28">
          <div className="flex space-x-8">
            <div>
              <img
                className="h-24 w-24 rounded-full"
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <div className="flex items-center space-x-3">
                <h1 class="text-4xl leading-10 font-bold">Darren Poon</h1>
                <span className="rounded-full bg-gray-50 border border-gray-200 px-2 py-0.5 text-xs leading-5 font-medium text-black uppercase">
                  Hobby
                </span>
              </div>
              <div>
                <dl>
                  <dt className="text-xs leading-5 text-gray-500 uppercase tracking-wide">
                    Git integration
                  </dt>
                  <dd className="flex items-center space-x-2 text-sm leading-5 font-bold">
                    <GitHubLogo className="h-4 w-4" />
                    <span>dyhpoon</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 col-gap-6">
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-gray-200 bg-white px-6 py-2 text-sm lending-5 font-medium text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150">
                Invite Team
              </a>
            </Link>
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-transparent bg-black px-6 py-2 text-sm lending-5 font-medium text-white hover:border-black hover:bg-white hover:text-black transition ease-in-out duration-150">
                Import Project
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pb-10">
        <main className="-mt-9 max-w-5xl mx-auto px-6 grid grid-cols-12 col-gap-20">
          <div className="col-span-7">
            <div>
              <h2 className="sr-only">Recent Projects</h2>
              <div className="space-y-12">
                <ul className="space-y-12">
                  <li>
                    <ProjectCard />
                  </li>
                  <li>
                    <ProjectCard />
                  </li>
                  <li>
                    <ProjectCard />
                  </li>
                  <li>
                    <ProjectCard />
                  </li>
                </ul>
                <div>
                  <Link href="#">
                    <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                      View All Projects
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-9 col-span-5 pt-1">
            <h2 className="text-sm leading-5 font-bold">Recent Activity</h2>
            <ul className="border-b border-gray-200 divide-y divide-gray-200">
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
            </ul>
            <div>
              <Link href="#">
                <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                  View All Activity
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

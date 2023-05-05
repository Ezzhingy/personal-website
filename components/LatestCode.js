import Link from "next/link";

export default function LatestCode({ repos }) {
  return (
    <div
      id="latest"
      className="max-w-2xl mx-auto pt-[100px] text-darkBg dark:text-lightBg"
    >
      <div className="flex flex-col gap-3 mx-10 items-start">
        <h1 className="font-bold text-2xl">Latest Code</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {repos &&
            repos.map((repo, i) => <GithubRepoCard repo={repo} key={i} />)}
        </div>
      </div>
    </div>
  );
}

const GithubRepoCard = ({ repo }) => {
  return (
    <div>
      <h1 className="font-semibold text-xl">{repo.name}</h1>
      <p className="my-3">{repo.description}</p>
      <Link
        href={repo.clone_url}
        target="_blank"
        rel="noreferrer"
        className="font-medium group flex space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </Link>
    </div>
  );
};

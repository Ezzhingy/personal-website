"use client";

import { userData } from "@/constants/constants";
import fetchRepos, { RepoType } from "@/functions/fetchRepos";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LatestCode() {
  const [mounted, setMounted] = useState(false);
  const [repos, setRepos] = useState<RepoType[]>([]);

  useEffect(() => {
    const initializeRepos = async () => {
      let token = process.env.GITHUB_AUTH_TOKEN;
      const repos: RepoType[] | undefined = await fetchRepos(userData, token);
      if (repos) setRepos(repos);
    };
    initializeRepos();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      id="latest"
      className="max-w-2xl mx-auto pt-32 sm:pt-24 text-darkBg dark:text-lightBg"
    >
      <div className="flex flex-col gap-3 mt-[50px] mx-10 items-start">
        <h1 className="font-bold text-4xl">Latest Code</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {repos &&
            repos.map((repo, i) => <GithubRepoCard repo={repo} key={i} />)}
        </div>
      </div>
    </div>
  );
}

const GithubRepoCard = ({ repo }: { repo: RepoType }) => {
  return (
    <div className="grid grid-cols-1">
      <h1 className="font-semibold text-xl">{repo.name}</h1>
      <p className="my-3">{repo.description}</p>
      <Link
        href={repo.clone_url}
        target="_blank"
        rel="noreferrer"
        className="font-medium group flex space-x-2 w-full items-center self-end"
      >
        <p>View Repository </p>
        <div className="transform group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </Link>
    </div>
  );
};

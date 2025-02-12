// RepoType interface (type more fields if needed)
export interface RepoType {
  name: string;
  description: string;
  clone_url: string;
}

interface DataType {
  githubUser: string;
}

const processData = async (res: Response) => {
  const datas = await res.json();
  let repos: RepoType[] = datas.items;
  let latestSixRepos = repos.splice(0, 4);
  return latestSixRepos;
};

const fetchRepos = async (data: DataType, token: string | undefined) => {
  try {
    const username = data.githubUser;
    const sortParameter = "updated";

    const query = `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=${sortParameter}&order=desc`;

    if (token) {
      const res = await fetch(query, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      return await processData(res);
    } else {
      const res = await fetch(query);
      return await processData(res);
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchRepos;

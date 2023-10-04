const fetchRepos = async (data, token) => {
  try {
    const username = data.githubUser;

    if (token) {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      const datas = await res.json();
      let repos = datas.items;
      let latestSixRepos = repos.splice(-4, 4);
      latestSixRepos = latestSixRepos.reverse();
      return latestSixRepos;
    } else {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );

      const datas = await res.json();
      let repos = datas.items;
      let latestSixRepos = repos.splice(-4, 4);
      latestSixRepos = latestSixRepos.reverse();
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchRepos;

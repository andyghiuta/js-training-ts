import fetch from 'node-fetch';

// async is always used in front of "function"
(() => {
  async function f() {
    return 1;
  }
  const f2 = async () => 2;
  const user = {
    async getInfo() {
      return 3;
    },
    async fetchProfile() {
      // await is always used inside a function that has async
      const info = await this.getInfo();
      return info + 4;
    },
  };

  f().then(console.log);
  f2().then(console.log);
  user.getInfo().then(console.log);
  user.fetchProfile().then(console.log);
})();

(() => {
  function processResponse(response: { ok: any; json: () => any; statusText: string; }) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }
  // Real example, fetching details from github
  async function fetchGithubUser(username: string) {
    console.log('Fetching Github user');
    const fetchingUser = fetch(`https://api.github.com/users/${username}`);
    console.log(fetchingUser);

    try {
      const apiResponse = await fetchingUser;
      const githubUser = await processResponse(apiResponse);
      console.log(`Retrieved user: ${githubUser.name} (${githubUser.company})`);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('Retrieving github user finished');
    }
  }

  async function fetchGithubRepos(username: string) {
    console.log('Fetching Github repos');
    const fetchingRepos = fetch(`https://api.github.com/users/${username}/repos`);
    console.log(fetchingRepos);

    try {
      const response = await fetchingRepos;
      const githubRepos = await processResponse(response);
      console.log(`Retrieved repos: ${githubRepos.length}`);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('Retrieving github repos finished');
    }
  }

  fetchGithubUser('andyghiuta');
  fetchGithubRepos('andyghiuta');

  console.log('Job DONE'); // or is it?
})();

import fetch from 'node-fetch';

function processResponse(response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
}
// Real example, fetching details from github
function fetchGithubUser(username: string) {
  console.log('Fetching Github user');
  const fetchingUser = fetch(`https://api.github.com/users/${username}`);
  console.log(fetchingUser);

  fetchingUser
    .then(processResponse)
    .then((githubUser) => {
      console.log(`Retrieved user: ${githubUser.name} (${githubUser.company})`);
    })
    .catch(console.log)
    .finally(() => {
      console.log('Retrieving github user finished');
    });
}
function fetchGithubRepos(username: string) {
  console.log('Fetching Github repos');
  const fetchingRepos = fetch(`https://api.github.com/users/${username}/repos`);
  console.log(fetchingRepos);

  fetchingRepos
    .then(processResponse)
    .then((githubRepos) => {
      console.log(`Retrieved repos: ${githubRepos.length}`);
    })
    .catch(console.log)
    .finally(() => {
      console.log('Retrieving github repos finished');
    });
}

fetchGithubUser('andyghiuta');
fetchGithubRepos('andyghiuta');

console.log('Job DONE'); // or is it?

// Usage: GITHUB_TOKEN=<TOKEN> node release.js v0.0.0

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const args = process.argv.slice(2);
const tag = args[0];

(async () => {
  await octokit.request('POST /repos/petermekhaeil/git-tag-release/releases', {
    owner: 'petermekhaeil',
    repo: 'git-tag-release',
    tag_name: tag,
    name: tag,
    body: `Full Changelog: https://github.com/OWNER/REPO/commits/${tag}`
  });
})();

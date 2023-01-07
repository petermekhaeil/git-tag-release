# git-tag-release

The different ways of creating a GitHub release.

[GitHub Documentation](https://docs.github.com/en/rest/releases/releases#create-a-release)

## Using cURL

```bash
curl \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/OWNER/REPO/releases \
  -d '{"tag_name":"v0.0.0","name":"v0.0.0","body":"Full Changelog: https://github.com/OWNER/REPO/commits/v0.0.0"}'
```

## Using JavaScript

```js
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
});

await octokit.request('POST /repos/{owner}/{repo}/releases', {
  owner: 'OWNER',
  repo: 'REPO',
  tag_name: 'v0.0.0',
  name: 'v0.0.0',
  body: 'Full Changelog: https://github.com/OWNER/REPO/commits/v0.0.0'
});
```

## Using GitHub CLI

```bash
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/OWNER/REPO/releases \
  -f tag_name='v0.0.0' \
  -f name='v0.0.0' \
  -f body='Full Changelog: https://github.com/OWNER/REPO/commits/v0.0.0'
```

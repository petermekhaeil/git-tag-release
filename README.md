# git-tag-release

The different ways of creating a GitHub release.

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

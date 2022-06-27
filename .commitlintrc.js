const { execSync } = require('child_process')

// @example: Branch Name: feature/issue_36 => #36
const issue = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim()
  .split('_')[1]

/** @type {import('git-cz').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['theme']],
    'type-enum': [
      2,
      'always',
      [
        'test',
        'feat',
        'fix',
        'chore',
        'docs',
        'refactor',
        'style',
        'ci',
        'perf',
        'release',
        'revert',
        'build',
      ],
    ],
  },
  prompt: {
    customScopesAlign: 'top',
    customIssuePrefixsAlign: !issue ? 'top' : 'bottom',
    defaultIssues: !issue ? '' : `#${issue}`,
    issuePrefixs: [
      { value: 'link', name: 'link:     Link to ISSUES' },
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
  },
}

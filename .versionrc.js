module.exports = {
  header: '',
  releaseCommitMessageFormat: 'release: create new release {{currentTag}}',
  tagPrefix: '',
  types: [
    { type: 'test', section: 'Tests' },
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Chore' },
    { type: 'docs', section: 'Documentation' },
    { type: 'refactor', section: 'Code Refactoring' },
    { type: 'style', section: 'Style' },
    { type: 'ci', section: 'Continuous Integration' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'release', section: 'Create a release commit' },
    { type: 'revert', section: 'Revert' },
    { type: 'build', section: 'Build System' },
  ],
}

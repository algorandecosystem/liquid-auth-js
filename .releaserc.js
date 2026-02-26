/**
 * Semantic Release Configuration
 * @module
 */
export default {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'breaking', release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'chore', release: 'minor' },
          { type: 'ci', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'build', release: 'patch' },
          { type: 'revert', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'breaking', section: 'Breaking', hidden: false },
            { type: 'feat', section: 'Features', hidden: false },
            { type: 'fix', section: 'Bug Fixes', hidden: false },
            { type: 'docs', section: 'Documentation', hidden: false },
            { type: 'style', section: 'Updates & Maintenance', hidden: false },
            { type: 'refactor', section: 'Updates & Maintenance', hidden: false },
            { type: 'perf', section: 'Updates & Maintenance', hidden: false },
            { type: 'test', section: 'Updates & Maintenance', hidden: false },
            { type: 'ci', section: 'Updates & Maintenance', hidden: false },
            { type: 'chore', section: 'Updates & Maintenance', hidden: false },
          ],
        },
        writerOpts: {
          transform: (commit) => {
            if (commit.committerDate) {
              try {
                new Date(commit.committerDate);
              } catch (e) {
                commit.committerDate = new Date().toISOString();
              }
            } else {
              commit.committerDate = new Date().toISOString();
            }
            return commit;
          },
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'release: v${nextRelease.version}',
      },
    ],
    [
      '@semantic-release/github',
      {
        successComment: false,
      },
    ],
  ],
  branches: ['main'],
};

# Welcome!

We're so glad you're thinking about contributing! If you're unsure about anything, just ask — or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We appreciate all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follows the [18F Code of Conduct](https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md) and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

If you have any questions or want to read more, check out the [18F Open Source Policy GitHub repository]( https://github.com/18f/open-source-policy), or just [shoot us an email](#).

## Guidelines

### Submitting an issue or recommendation

While it is not necessary to use this format, it would be helpful if, when submitting an issue, it contained the following:

**What happened**

*Include a high-level description of the feature or error here including steps of how to recreate it if applicable. Include any benefits, challenges, or considerations. This can be short and sweet.*

**What I expected**

*Describe the desired behavior and what would deem this issue, bug, or feature complete.*

**Additional Info**

*Include any images, steps to recreate, notes, emojis, or whatever.*

### Submitting a pull request

Here are a few guidelines to follow when submitting a pull request:

1. Create a GitHub account or sign in to your existing account.
1. Fork this repo into your GitHub account. Read more about forking a repo here on GitHub:
[https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)
1. Create a branch that lightly defines what you're working on (e.g. add-styles).
1. Ensure that your contribution works via `npm`, if applicable. See below under
   _Install the package locally via `npm-link`_.
1. Once you're ready to submit a pull request, push your branch up to the repo.
1. Submit your pull request against the `gh-pages` branch.

Have questions or need help with setup? Open an issue here [https://github.com/joshbruce/sam-design-standards/issues](https://github.com/joshbruce/sam-design-standards/issues).

### Building the project locally with gulp

You've cloned the repository. Now, we just have to make sure your environment can do what it needs to. Start by opening Terminal or Command Prompt.

#### Confirm Ruby

To serve the site locally, we will need Ruby and Jekyll (installed by Ruby). Confirm Ruby is installed:

```$ gem -v```

If you do not see a version number, [install RubyGems](https://rubygems.org/pages/download).

We also recommend [installing bundler](http://bundler.io).

#### Confirm NPM

To install the required modules, we will need Node Package Manager (NPM). Confirm NPM is available:

```$ npm -v```

If you do not see a version number, [install Node.js](https://nodejs.org/en/download/).

#### Confirm Gulp 

To compile the site, we will need Gulp - an NPM module. Confirm Gulp is available:

```$ gulp -v```

If you do not see a version number, and you have confirmed NPM:

```$ npm install --global gulp-cli```

#### Serve locally

If you've made it here, you are ready to go. Launch Terminal (OS X) or Command Prompt (Windows) and move to the locally cloned repository.

```$ cd ~/path/to/cloned/repo/sam-web-design-standards```

**Update gems:**

```$ bundle update```

**Update modules:**

```$ npm update```

**Serve the site:**

```$gulp website:serve```

After running this command, you’ll be able to view
the Draft SAM Web Design Standards website locally (http://127.0.0.1:4000).
This also sets up gulp and Jekyll to watch for file changes to the `/_docs`
and `/src` directories and rebuilds the website accordingly.

### Committing files when updating the `/src` directory

When you run `npm start` to preview the website locally, you generate many files
that are tracked by Git. This leaves your working directory in a dirty state,
and it can make knowing which files to include in your commit seem like a
daunting task. The following steps will make it easier for you to commit changes
while the team looks into different approaches for handling changes to the
Standards website and the `uswds` package.

If you made any changes to the `/src` directory, you have also made changes in
the following directories:

```
docs/_scss/
docs/assets/img/
docs/assets/fonts/
docs/assets/js/vendor/
```

This is due to how the Standards website consumes the `uswds` package.

Changes may also appear in these directories and files, if you've made any
changes to `/src`.

```
dist/css/
dist/js/
dist/fonts/
dist/img/
```

These changes must be committed in order for our distribution directories and
Standards website to remain in sync with the `uswds` package. Please keep
changes in a directory within its own series of commits. The commit messages
below are examples.

```sh
git add src/ && \
git commit -m "Update the src files"

git add docs/ && \
git commit -m "Update the Standards website"

git add dist && \
git commit -m "Update the dist directory"
```

Because this will produce three commits, the only commits that may be reviewed
are the commits to the `/src` directory. This only applies to contributions that
are done solely on the `/src` directory. If any contributions are added to the
Standards website, the `/docs` directory will also be reviewed. The contents of
the `/dist` directory is generated automatically, so commits may not need a
review.

## Licenses and attribution

### A few parts of this project are not in the public domain

The Standards inherit from the [U.S. Web Design Standards](https://standards.usa.gov) distributed by 18f. Thereby, inheriting the licenses and attributions of that project.

Some files in ```/dist/fonts``` and ```/dist``` Standards incorporate [Font Awesome](http://fontawesome.io/) by Dave Gandy under the [SIL Open Font License 1.1](http://scripts.sil.org/OFL).

### The rest of this project is in the public domain

The rest of this project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

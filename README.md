# requires nodejs v21

```
sudo -i
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source /rooo/.bashrc
nvm install 21
nvm use 21
git clone https://github.com/bitnet-io/BitOrdinals
cd BitOrdinals
wget https://github.com/bitnet-io/BitOrdinals/releases/download/firefox-chrome/node_modules-bitordinals-modules-05-14-2024.tar.gz
tar -xvf node_modules-bitordinals-modules-05-14-2024.tar.gz
npm run build
cp -rf dist leather-bitordinals-chrome
TARGET_BROWSER=firefox npm run build
cp -rf dist leather-bitordinals-firefox
```

# Chrome
![s1](https://github.com/bitnet-io/BitOrdinals/releases/download/firefox-chrome/make.gif)


# Leather

[![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/ldinpeekobnhjjdofggfgjlcehhmanlj?label=Chrome%20Web%20Store)](https://chrome.google.com/webstore/detail/stacks-wallet/ldinpeekobnhjjdofggfgjlcehhmanlj)
[![Mozilla Add-on](https://img.shields.io/amo/stars/leather-wallet?label=Firefox%20Add-on)](https://addons.mozilla.org/en-US/firefox/addon/leather-wallet/)
[![coverage](https://raw.githubusercontent.com/leather-wallet/extension/gh-pages/badge.svg)](https://leather-wallet.github.io/extension/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Leather is the most popular and trusted wallet for apps built on Bitcoin. Connect to apps and manage assets secured by Bitcoin and Bitcoin L2s with battle-tested wallet for the Stacks blockchain.

[📚 See Leather Developer Documentation →](https://leather.gitbook.io/developers/home/welcome)

[📩 Join the mailing list for updates →](https://forms.gle/sdZPu2jbX1AeQ8Fi9)

## Development

This application is a browser extension. There is no ability to run it as a standalone web application.

Each child of the `src` directory represents the JavaScript context in which it is ran.

### Dev mode

When working on the extension, you can run it in `development` mode which will watch for any file changes and
use `react-refresh` to update the extension as you work. This gives us near instant reloading of our changes, and
persists the state of the application between changes. To start development mode for the extension, run this command:

```bash
yarn dev
```

#### Optional: run test app

We bundle a test app to use along with the extension. It gives easy access to the various functions that the extension
can do.

In a separate terminal, run:

```bash
yarn dev:test-app
```

### Loading extension in your browser

You'll need to add it to your browser of choice. Leather only
supports Chromium and Firefox browsers. When you run `yarn dev`, it will compile the application to the `/dist` folder

- [Chrome instructions](https://developer.chrome.com/docs/extensions/mv3/faq/#faq-dev-01)
- [Firefox instructions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#trying_it_out)

## Testing

Several testing scripts are available in [`package.json`](./package.json).

The integration tests expect the extension to be built prior to running. The extension can be built for tests with the command below.

```bash
yarn build:test
```

The integration tests use Playwright, which requires the system to have the browsers it needs. The following command installs everything Playwright needs.

```bash
yarn playwright install --with-deps
```

Note that the installed browsers are tied to the version of Playwright being used, and it may be necessary to run the above command again in some situations, such as when upgrading Playwright or switching branches. [Read the documentation for more information](https://playwright.dev/docs/cli#install-system-dependencies).

### Integration tests

All integration tests can be run using:

```bash
yarn test:integration
```

To run a suite of tests you can use:

```bash
yarn playwright test specs/TEST.spec.ts
yarn playwright test tests/specs --shard=3/8
```

### Unit tests

Unit tests can be run with vitest using:

```bash
yarn test:unit
```

## Production

[See instructions on Leather.io to install from source](https://leather.io/install-extension)

Alternatively, the following steps can be taken by _technical_ users with the latest version of node installed on their machines.

### Build from source

Run the following from within this repository's root directory if you've pulled it with Git:

```bash
yarn && yarn prepare && yarn build
```

The extension is now built in the `./dist` folder.

### Firefox reviewers

To build the extension in Firefox mode, the `TARGET_BROWSER=firefox` variable needs to be set.

```bash
yarn && yarn prepare && TARGET_BROWSER=firefox yarn build
```

Note that when building in a clean environment, some code may vary between this and the submitted build. This is because some variables are set within the scope of the production build's CI.

## Security

We consider the security of our systems a top priority. But no matter how much effort we put into system security, there can still be vulnerabilities present.

If you discover a security vulnerability, please use one of the following means of communications to report it to us:

- Report the security issue to our [HackerOne program](https://hackerone.com/leather_wallet)
- Report the security issue directly at [security@leather.io](mailto:security@leather.io)

Please note this email is strictly for reporting security vulnerabilities. For support queries, contact [contact@leather.io](mailto:contact@leather.io). Your efforts to responsibly disclose your findings are sincerely appreciated and will be taken into account to acknowledge your contributions.

### Audit Report

In Q1 2021, Leather partnered with [Least Authority](https://leastauthority.com/), a leading security consultancy with experience in the crypto space, to audit Leather. On April 29th 2021, after addressing the major concerns described in the initial findings, as well as a concluding sign off from the Least Authority team, a final report was delivered.

[Download and read the full report here](https://github.com/leather-wallet/extension/blob/main/public/docs/least-authority-security-audit-report.pdf)

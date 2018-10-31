/**
 * Build configuration for the packaging tool. This file will be automatically detected and used
 * to build the different packages inside of Hydragen.
 */
const { join } = require('path');

const packageJson = require('./package.json');

/** Current version of the project*/
const buildVersion = packageJson.version;

/**
 * Required Angular version for all Hydragen packages. This version will be used
 * as the peer dependency version for Angular in all release packages.
 */
const angularVersion = '>=7.0.0-beta.5';

/** License that will be placed inside of all created bundles. */
const buildLicense = `/**
 * @license
 * Copyright Docebo spa All Rights Reserved.
 */`;

module.exports = {
  projectVersion: buildVersion,
  angularVersion: angularVersion,
  projectDir: __dirname,
  packagesDir: join(__dirname, 'src'),
  outputDir: join(__dirname, 'dist'),
  licenseBanner: buildLicense,
};

const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const { resolve, join, dirname } = require('path');
const { copy, mkdirs } = require("fs-extra");

async function packageAfterCopy(_forgeConfig, buildPath) {
  const requiredNativePackages = ["better-sqlite3", "bcrypt"];

  const dirnamePath = ".";
  const sourceNodeModulesPath = resolve(dirnamePath, "node_modules");
  const destNodeModulesPath = resolve(buildPath, "node_modules");

  // Copy all asked packages in /node_modules directory inside the asar archive
  await Promise.all(
    requiredNativePackages.map(async (packageName) => {
      const sourcePath = join(sourceNodeModulesPath, packageName);
      const destPath = join(destNodeModulesPath, packageName);

      await mkdirs(dirname(destPath));
      await copy(sourcePath, destPath, {
        // @ts-ignore
        recursive: true,
        preserveTimestamps: true
      });
    })
  );
}

/** @type {import("@electron-forge/shared-types").ForgeConfig} */
module.exports = {
  packagerConfig: {
    ignore: [
      /node_modules\/(?!(better-sqlite3|bcrypt|node-gyp-build|bindings|file-uri-to-path)\/)/
    ],
    asar: {
      unpack: '*.{node,dylib,dll,so}',
      unpackDir: '{better-sqlite3,bcrypt}'
    },
  },
  rebuildConfig: {},
  hooks: { /* packageAfterCopy */ },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {
        module: ['better-sqlite3', 'bcrypt', 'node-gyp-build', 'bindings', 'file-uri-to-path']
      },
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/renderer.js',
              name: 'main_window',
              preload: {
                js: './src/preload.js',
              },
            },
          ],
        },
      },
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

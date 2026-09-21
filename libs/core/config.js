const config = {
  language: 'ru'
};

/** @typedef {typeof config} AppConfig */

/**
 * @returns {AppConfig} App configuration.
 */
export function useConfig() {
  return JSON.parse(JSON.stringify(config));
}

function exportConfig(config) {
  return console.log('[config] Unimplemented exportConfig()');
}
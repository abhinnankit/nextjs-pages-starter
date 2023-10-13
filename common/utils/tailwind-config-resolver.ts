import defaultConfig from 'tailwindcss/defaultConfig';
import resolveConfig from 'tailwindcss/resolveConfig';

export const config = resolveConfig(defaultConfig);

console.log(config);

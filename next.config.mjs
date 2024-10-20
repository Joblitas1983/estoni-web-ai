// next.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Asegúrate de que 'some-module' está instalado en tu proyecto
import someModule from 'some-module'; // Solo debe estar una vez

const nextConfig = {
  reactStrictMode: true,
  // Otras configuraciones que necesites
};

export default nextConfig;

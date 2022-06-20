import {
  defineNuxtModule,
  installModule,
  addTemplate,
  addPlugin,
  useModuleContainer,
  addAutoImportDir,
  addAutoImport,
  addComponentsDir,
  addPluginTemplate,
  isNuxt2,
  isNuxt3,
  resolvePath,
  addComponent,
} from '@nuxt/kit';
import { fileURLToPath } from 'node:url';
import { ScanDir } from '@nuxt/schema';

export default defineNuxtModule({
  meta: {
    // Usually  npm package name of your module
    name: 'test',
    // The key in `nuxt.config` that holds your module options
    configKey: 'test',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0',
    },
  },
  async setup(moduleOptions, nuxt) {
    const moduleContainer = useModuleContainer(nuxt);

    moduleContainer.addLayout(
      {
        filename: 'MarketLayout.vue',
        write: true,
        src: await resolvePath(__dirname + '/layout/MarketLayout.vue'),
      },
      'market-layout'
    );
  },
});

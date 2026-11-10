import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    babel({
      presets: [
        reactCompilerPreset({
          logger: {
            logEvent(filename, event) {
              if (command === 'serve' && (event.kind === 'CompileError' || event.kind === 'PipelineError')) {
                console.warn(`[Compiler] ${event.kind}: ${filename}.`);
              }
            },
          },
        }),
      ],
    }),
    checker({
      typescript: { buildMode: true },
      eslint: { lintCommand: 'eslint .', useFlatConfig: true },
      overlay: { initialIsOpen: false },
      enableBuild: false,
    }),
  ],
}));

/// <reference types="vitest/config" />
import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(({ command, mode }) => ({
  plugins: [
    react(),
    babel({
      presets: [
        reactCompilerPreset({
          logger: {
            logEvent(filename, event) {
              if (
                command === 'serve' &&
                mode !== 'test' &&
                (event.kind === 'CompileError' || event.kind === 'PipelineError')
              ) {
                console.warn(`[Compiler] ${event.kind}: ${filename}.`);
              }
            },
          },
        }),
      ],
    }),
    mode !== 'test' &&
      checker({
        typescript: { buildMode: true },
        eslint: { lintCommand: 'eslint .', useFlatConfig: true },
        overlay: { initialIsOpen: false },
        enableBuild: false,
      }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests.ts'],
  },
}));

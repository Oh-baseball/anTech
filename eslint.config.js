import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // 전역적으로 무시할 파일 및 디렉토리 설정
  {
    ignores: ['dist', 'node_modules', '.DS_Store'],
  },

  // 1. 기본 설정 (모든 파일에 적용)
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 2. React 관련 설정
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // React 및 JSX 관련 규칙
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      // React Hooks 규칙
      ...reactHooks.configs.recommended.rules,
      // React Refresh 규칙 (Vite 환경)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // TypeScript 관련 규칙 중 비활성화할 것
      // 'any' 타입 사용 시 경고
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // 3. Prettier와의 충돌 방지 설정 (가장 마지막에 위치해야 함)
  prettierConfig,
);

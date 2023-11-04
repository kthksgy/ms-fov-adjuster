# マウス感度／視野角調整アプリ

モニターディスタンスを用いてマウス感度と視野角を調整するための React／Next.js アプリケーションです。  
現在の環境設定と対象とするモニターディスタンスを基に、新たなマウス感度／視野角を算出します。

視野角を指定したマウス感度の算出、マウス感度を指定した視野角の算出が可能です。

## 使用方法

[本リポジトリの GitHub Pages](https://kthksgy.github.io/ms-fov-adjuster)にて使用できます。

## 開発

- [開発サーバー(http://localhost:3000)](http://localhost:3000)の起動

```
$ npm run dev
```

- ビルド

```
$ npm run build
```

- 静的出力

```
$ npm run export
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

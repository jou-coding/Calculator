# 電卓アプリ

GitHub Pages で動作する電卓アプリです。TypeScript で構築され、簡単に Web 上で動作します

## 制作の目的

- TEST を学ぶこと
- build の仕方を学ぶこと

## 📁 ディレクトリ構成

```
├── build.js # ビルドスクリプト（ESBuild + fs 操作）
├── index.html # アプリのエントリーポイント
├── package.json # npm 依存管理・スクリプト定義
├── tsconfig.json # TypeScript 設定ファイル
├── vite.config.js # テスト用 Vite 設定
├── manifest.json # PWA 用マニフェスト（※未使用の可能性あり）
├── service-worker.js # PWA 用サービスワーカー（※未使用の可能性あり）
├── images/ # アイコン画像など
├── test/ # テストファイル（Vitest）
└── src/
    ├── app/ # アプリケーションのロジック
    ├── lib/ # ユーティリティ関数
    ├── ui/ # UI 関連（表示ロジックなど）
    └── styles/ # CSS ファイル（main.css など）

```

## ⚙️ セットアップ方法

```
1. 依存関係のインストール
npm install
2. 開発モード（TypeScriptの監視）
npm run dev
3. ビルド（dist/ ディレクトリ生成）
npm run build
4. デプロイ（GitHub Pages へ）
npm run deploy
※ gh-pages パッケージがインストールされている必要があります。

🧪 テスト
npm run test
テストランナーには Vitest を使用しています。
テストファイルは __test__/ ディレクトリ内に配置します。
```

## 🛠 使用技術

- TypeScript
- ESBuild
- Node.js
- Vitest
- GitHub Pages（デプロイ）

## 📱 PWA 対応について（未定）

このアプリは、将来的に PWA（Progressive Web App）対応を検討していますが、  
現時点では導入は未定です。

必要に応じて、別プロジェクトで検証を行い、安定して動作することが確認できた場合に限り、  
本アプリに統合する可能性があります。

## 🪪 ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。
詳しくは [LICENSE](./LICENSE) ファイルをご覧ください。

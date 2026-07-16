# 💗 Nachumin Diary

LINE風の一人日記PWA。1日 = 1吹き出し。データは端末内のIndexedDBに保存され、アプリを更新しても消えません。

## 機能

- 1日 = 1吹き出し（既存の日に送信すると空行を挟んで追記）
- 日付は「今日」「昨日」ワンタッチ + 📅カレンダーで任意指定
- 吹き出しタップで編集、削除は2段階確認
- 検索（ハイライト付き）
- 📤 txt一括エクスポート（コピー / .txtダウンロード）
- 📥 エクスポートしたtxtを貼り付けて復元（既存日付は上書きせずスキップ）
- PWA: ホーム画面に追加でスタンドアロン起動・オフライン動作

## データ保存の仕組み（重要）

- IndexedDB `nachumin-diary` / ストア `kv` / キー `line-diary-entries-v1`
- **この名前は絶対に変更しないこと。** 変更しない限り、アプリを何度デプロイし直してもデータは残る
- `navigator.storage.persist()` でブラウザに永続化を要求済み
- 念のため定期的に 📤 エクスポートでバックアップ推奨

## 開発

```bash
npm install
npm run dev
```

## GitHub Pages へのデプロイ

初回のみ:

```bash
git init
git add -A
git commit -m "initial commit"
# GitHubでリポジトリを作成してから:
git remote add origin git@github.com:<あなたのアカウント>/nachumin-diary.git
git push -u origin main
```

デプロイ（毎回これだけ）:

```bash
npm run deploy
```

`gh-pages` ブランチに `dist/` が公開されます。GitHubリポジトリの
Settings → Pages → Branch を `gh-pages` に設定してください。

公開URL: `https://<あなたのアカウント>.github.io/nachumin-diary/`

> `vite.config.js` の `base: "./"` により、リポジトリ名が変わってもそのまま動きます。

## アイコンの再生成

```bash
npm run icons
```

`scripts/gen-icons.mjs` がホットピンク×マゼンタのハートアイコンを `public/` に生成します。

# Spotify Mood Matcher

Spotify Mood Matcherは、ユーザーが選択した雰囲気やジャンルに基づいてSpotify APIを利用し、関連する楽曲を取得して表示するWebアプリケーションです。

## 機能

- ユーザーが選択した雰囲気に基づいてSpotifyから楽曲を検索
- 検索結果をリスト表示

## 使用技術

- TypeScript
- HTML, CSS, JavaScript
- Spotify Web API

## セットアップ

### 前提条件

- Node.jsがインストールされていること

### インストール

1. リポジトリをクローンします。

    ```bash
    git clone https://github.com/yourusername/spotify-mood-matcher.git
    cd spotify-mood-matcher
    ```

2. 依存関係をインストールします。

    ```bash
    npm install
    ```

3. `scripts/app.ts` 内の `YOUR_SPOTIFY_CLIENT_ID` と `YOUR_SPOTIFY_CLIENT_SECRET` を実際のクレデンシャルに置き換えます。

### ビルドと実行

1. TypeScriptファイルをコンパイルします。

    ```bash
    npm run build
    ```

2. ローカル開発サーバーを起動します。

    ```bash
    npm start
    ```

3. ブラウザで `http://localhost:3000` を開きます。

## ディレクトリ構成


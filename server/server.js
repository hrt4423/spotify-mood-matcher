// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// 環境変数の読み込み
dotenv.config();

// Expressアプリケーションの作成
const app = express();

// ミドルウェアの設定
app.use(bodyParser.json());
app.use(cors());

// MongoDB接続
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// ルート設定
app.get('/', (req, res) => {
    res.send('Welcome to Spotify Mood Matcher API');
});

// ポート設定
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

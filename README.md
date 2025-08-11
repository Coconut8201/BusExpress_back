# BusExpress_back

淡水公車查詢系統後端服務 - 提供淡水地區40台公車的即時查詢服務

## 系統需求

- Node.js 16+
- MongoDB 資料庫
- VPN 連線 (用於資料庫存取)

## 安裝與設定

### 1. 下載專案
```bash
git clone https://github.com/Coconut8201/BusExpress_back.git
cd BusExpress_back
```

### 2. 安裝依賴套件
```bash
npm install
```

### 3. 資料庫連線設定

本專案使用 MongoDB 資料庫，透過 Docker 部署。

**資料庫連接字串:**
```
mongodb://user:userpassword@192.168.1.25/TkuBusPuPu
```

**重要:** 連接資料庫需要先建立 VPN 連線
- 請聯繫 410630619 張宜蓁 取得 `.ovpn` 檔案
- 確保 VPN 連線正常後再啟動服務

## 執行專案

### 啟動開發伺服器
```bash
npm run dev
```

### 存取服務
伺服器啟動後，開啟瀏覽器前往:
```
http://localhost:3000/index
```

## 功能說明

### 公車查詢範圍
- **涵蓋範圍:** 淡水地區
- **公車數量:** 40台公車
- **查詢資料來源:** `tkubusdbs` 集合

### 主要功能
1. **使用者系統**
   - 帳號登入/註冊
   - 使用者資料儲存於 `user` 集合

2. **公車查詢**
   - 即時公車位置查詢
   - 路線資訊顯示

3. **路線圖顯示**
   - 路線圖儲存於 `busrouteimages` 集合
   - 支援各路線圖片直接顯示

## 資料庫結構

- `user` - 使用者資料
- `tkubusdbs` - 公車基本資料
- `busrouteimages` - 公車路線圖片


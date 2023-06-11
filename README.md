# BusExpress_back
 
##操作步驟:
1. git clone 連結
2. 進入Buspupu資料夾
我們使用MongoDB資料庫，並使用docker打包，如要連結到mongo資料庫則使用連結: 
mongodb://user:userpassword@192.168.1.25/TkuBusPuPu
3. 連結此資料庫需是先連結VPN:帳號：ethci 密碼：@ethci2925
4. npm i 下載所需的資源包
5. npm run dev 執行伺服器
6. 連結到網址: http://localhost:3000/index ，公車查詢主頁
7. 在主頁可以登入帳號，這邊調用到資料庫user資料表(collection)，創建跟查詢此資料庫。
8. 我們公車的範圍是淡水內的公車，僅有40台公車在我們的查詢範圍內，有查詢到該公車的話會跳到正確的頁面，可查詢的公車存放在tkubusdbs中。
9. 每台公車的路線圖被額外存在busrouteimages 中，以方便直接顯示不同車車的路線圖
10. 目前辜能尚未完整，還在修改中

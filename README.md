# BusExpress_back
 
##操作步驟:
1. git clone 連結
2. 進入Buspupu資料夾
我們使用MongoDB資料庫，並使用docker打包，如要連結到mongo資料庫則使用連結: 
mongodb://user:userpassword@192.168.1.25/TkuBusPuPu
3. 連結此資料庫需是先連結VPN，請聯繫 410630619 張宜蓁以獲得 .ovpn檔案
4. npm i 下載所需的資源包
5. npm run dev 執行伺服器
6. 連結到網址: http://localhost:3000/index ，公車查詢主頁
7. 在主頁可以登入帳號，這邊調用到資料庫user資料表(collection)，創建跟查詢此資料庫。
8. 我們公車的範圍是淡水內的公車，僅有40台公車在我們的查詢範圍內，有查詢到該公車的話會跳到正確的頁面，可查詢的公車存放在tkubusdbs中。
9. 每台公車的路線圖被額外存在busrouteimages 中，以方便直接顯示不同車車的路線圖
10. 目前辜能尚未完整，還在修改中


---
# 详细文档见https://modelscope.cn/docs/%E5%88%9B%E7%A9%BA%E9%97%B4%E5%8D%A1%E7%89%87
domain: #领域：cv/nlp/audio/multi-modal/AutoML
# - cv
tags: #自定义标签
- 
datasets: #关联数据集
  evaluation: 
  #- damotest/beans
  test:
  #- damotest/squad
  train:
  #- modelscope/coco_2014_caption
models: #关联模型
#- damo/speech_charctc_kws_phone-xiaoyunxiaoyun
deployspec: #部署配置，默认上限GPU4核、内存8GB、无GPU、单实例，超过此规格请联系管理员配置才能生效
# 部署启动文件(若SDK为Gradio/Streamlit，默认为app.py, 若为Static HTML, 默认为index.html)
# entry_file: 
# CPU核数
  cpu: 2
# 内存（单位MB)
  memory: 8000
# gpu个数
  gpu: 0
# gpu共享显存（单位GB，当gpu=0时生效，当gpu>0时显存独占，此配置不生效）
  gpu_memory: 0
# 实例数
  instance: 1
license: Apache License 2.0
---
#### Clone with HTTP
```bash
 git clone https://www.modelscope.cn/studios/XR-3D/InstructDynamicAvatar.git
```

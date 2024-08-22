練習解決 CORS 跨域 ( 同源策略 )  的測試庫

說明：

**(一)** 為了模擬兩個不同域名的情境，所以自己建立了簡單的後端 API，以及前端打 API 的部分

以下為模擬前、後端因域名不同所出現的 CORS 錯誤，以及解決流程：

( 以下 frontend 簡稱前端；backend 簡稱後端 )

1. 先將此儲存庫下載下來，並用 VSCode 開啟
2. 終端機切換到後端： `cd .\backend\`
3. 後端安裝套件：`npm i`
4. 啟動後端伺服器 ：`node server.js`
5. 開啟 Go Live (網頁預覽) → 選擇 frontend
6. 點擊畫面上的按鈕可呼叫 API，並且會出現 CORS 的錯誤
7. 到此為止，已正確建立不同網域的測試環境了

**(二)** 碰到跨域時的解決方案

1. 安裝 Chome 套件  [**Moesif Origin/CORS Changer & API Logger**](https://chromewebstore.google.com/detail/digfbfaphojjndkpccljibejjbppifbc)
2. 使用[無安全模式瀏覽器](https://www.notion.so/afd9ce1fdd0f42bc95ac9ecaf4977699?pvs=21)
3. 使用代理伺服器
4. 使用 JSONP ( 只能用 get 請求，無法使用其他的 HTTP 請求 )
5. 請後端在 API 加上標頭

**(三)** 注意!

- 每次後端改動程式都要重新啟動伺服器，才能吃到最後更新的程式
- 需使用 `node server.js` 啟動伺服器，前端才 call 的到 API

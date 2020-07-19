# 建立專案
- 建立一個專案資料夾
- 在這個資料夾裡透過 npm 安裝 Node.js、Express、與 nodemon
- 建立 app.js 這個文件，載入 Express
- 建立 localhost 伺服器，並設定 port 3000 監聽
- 透過 nodemon 來啟動伺服器
- 在瀏覽器檢視伺服器的回應

# 樣板引擎 template engine
- 讓伺服器直接回應 HTML 頁面給瀏覽器
- 建立樣板引擎的布局
- 建立樣板引擎的局部樣板
- 在樣板引擎中帶入資料

# Express的靜態檔案
- 成功下載Bootstrap、jQuery、Popper.js、fontAwesome的靜態檔案

# 顯示動態資料
- 將資料帶入樣板中顯示
- 在view使用迴圈
- 讀取JSON檔案，將外部資料載入Express中
- 在網頁中應用路由的params，打造動態路由

## 使用者可以在首頁看到所有餐廳與它們的簡單資料：
- 餐廳照片
- 餐廳名稱
- 餐廳分類
- 餐廳評分
## 使用者可以再點進去看餐廳的詳細資訊：
- 類別
- 地址
- 電話
- 描述
- 圖片
## 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
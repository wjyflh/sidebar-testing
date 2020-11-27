# Sidebar component

## 使用技術列表
1. React Hooks
2. Redux
3. SCSS / styled-components & themePrivider
4. SCSS animation
## 專案安裝與起始
* 專案安裝
    ```
    npm install
    ``` 
* 專案起始
    ```
    npm run start
    ``` 
    
## 專案資料夾架構（./src）
* `/assets` 為素材區，包含：
     * `/iconfont` 內擺放 [iconfont平台](https://icofont.com/) 下載的 icon 資料包。
     * `/images` 內擺放圖片素材。
---
* `/components` 為所有專案中的組件放置處。
---
* `/store` 為 redux 架構的相關資料，包含：
    * `/actions`：存放 actions 程式，目前拆成 UI、User 兩個情境。
    * `/reducers`：存放 reducers 程式，目前拆成 UI、User 兩個情境。
    * `/actionTypes.js`：action types 的定義都放置於此。
---
* `/styles`：為全域的樣式定義區，並且用 styled-components 做封裝。
    * `globalStyle.js`：裡面有 reset 樣式與客製化的全域樣式。
---
* `/utils`
    * `constant.js`： 主要放置程式面需要用到的 ***通用的型別定義***、***共用的 functions***、***共用的參數***。
    * `constantStyle.js`：可以用來定義 ***樣式*** 中需要用到的參數設定，以及定義 styled-components 的 ***theme 物件*** 供 ThemeProvider 套用。


## 操作說明

### Sidebar 組件的資料入口
1. 如果要查看 Sidebar 的結構資料可以直接到 `./src/store/reducers/uiReducer.js` 中的 `initState` 中查閱。
2. 可以從 `./src/components/sidebar/SideBar.js` 中找照 Sidebar 的實作，目前直接透過 redux 運作將結構資料帶入 Sidebar 的 props 中，從 `./src/App.js` 可以看到:
```
// init sidebar state with
const sidebarData = useSelector(store => store.ui.sidebarData)

...

<Sidebar data={sidebarData}></Sidebar>
```


### 切換使用者
目前實作的使用者定義在 `./src/utils/constant.js` 的 UserType 中：

```
export const UserType = {
    normal: 'normal',
    pro: 'pro'
}
```

並且在 `./src/App.js` 中帶入 redux 去切換使用者身份，這邊使用「一般使用者」身份：
```
// 一般用戶
useEffect(() => {
    dispatch(setUserRole(UserType.normal))
}, []);
```

可以直接改動 UserType 類別去呈現其他的使用者狀態（更改後記得重整畫面）：
```
// pro 用戶
useEffect(() => {
    dispatch(setUserRole(UserType.pro))
}, []);
``` 
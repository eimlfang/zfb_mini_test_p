// 填入 appID
const APPID = "ec75c8a43d8b4a9887f57b9a274a9da4";

if(APPID === ""){
  wx.showToast({
    title: `请在config.js中提供正确的appid`,
    icon: 'none',
    duration: 5000
  });
}

module.exports = {
  APPID: APPID
}
import Vue from 'vue'
import App from './App'
import directive from './common/directive.js'
import utils from './common/utils.js'
import config from './config.js'
import onfire from './common/onfire.js'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import {
	gotopage
} from '@/common/gotopage.js'

/* Vuex */
import store from "./store/index.js"
Vue.prototype.$store = store;

// 公共组件
import headerBar from './components/header.vue'
Vue.component('header-bar', headerBar)


//请求加载组件
import requestLoading from './components/jjjloading.vue';

//组件挂载到全局，方便每个页面使用
Vue.component('request-loading', requestLoading);

/*底部数据*/
import tabBar from "@/components/tabbar/footTabbar.vue"
Vue.component('tabBar', tabBar)
Vue.prototype.footTabberData = {
	active: 'home'
};

Vue.prototype.$fire = new onfire()

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.config = config

const app = new Vue({
	...App
})
app.$mount()



Vue.prototype.websiteUrl = config.app_url;
Vue.prototype.app_id = config.app_id;
//h5发布路径
Vue.prototype.h5_addr = config.h5_addr;
/*页面跳转*/
Vue.prototype.gotoPage = gotopage;
Vue.prototype.font_url = config.font_url;



//#ifdef H5
app.$router.afterEach((to, from) => {
	const u = navigator.userAgent.toLowerCase();
	if (u.indexOf("like mac os x") < 0 || u.match(/MicroMessenger/i) != 'micromessenger') return;
	if (to.path !== global.location.pathname) {
		location.assign(config.app_url + config.h5_addr + to.fullPath);
	}
})
//#endif


//是否是ios
Vue.prototype.ios = function() {
	const u = navigator.userAgent.toLowerCase();
	if (u.indexOf("like mac os x") < 0 || u.match(/MicroMessenger/i) != 'micromessenger') {
		return false;
	}
	return true;
};

//get请求
Vue.prototype._get = function(path, data, success, fail, complete) {
	console.log(path,data.params,'_get')
	data = data || {};
	data.token = uni.getStorageSync('token') || '';
	data.tuiguangid = uni.getStorageSync('tuiguangid') || '';
	// data.supplierid = uni.getStorageSync('supplierid') || '';
	data.supplierid = uni.getStorageSync('supplier') || '';
	data.app_id = this.getAppId();
	uni.request({
		url: this.websiteUrl + '/index.php/api/' + path,
		data: data,
		dataType: 'json',
		method: 'GET',
		success: (res) => {
			if (res.statusCode !== 200 || typeof res.data !== 'object') {
				return false;
			}
			if (res.data.code === -2) {
				this.showError(res.data.msg, function() {
					uni.removeStorageSync('token');
					this.gotoPage('/pages/index/index', 'reLaunch');
				})
			} else if (res.data.code === -1) {
				// 登录态失效, 重新登录
				// console.log('登录态失效, 重新登录');
				// this.doLogin();
			} else if (res.data.code === 0) {
				this.showError(res.data.msg, function() {
					fail && fail(res);
				});
				return false;
			} else {
				success && success(res.data);
			}
		},
		fail: (res) => {
			fail && fail(res);
		},
		complete: (res) => {
			uni.hideLoading();
			complete && complete(res);
		},
	});
};

//post请求
Vue.prototype._post = function(path, data, success, fail, complete) {
	console.log(data,'_post')
	data = data || {};
	data.token = uni.getStorageSync('token') || '';
	data.tuiguangid = uni.getStorageSync('tuiguangid') || '';
	// data.supplierid = uni.getStorageSync('supplierid') || '';
	data.supplierid = uni.getStorageSync('supplier') || '';
	data.country = uni.getStorageSync('getLocation').country;
	data.province = uni.getStorageSync('getLocation').province;
	data.city = uni.getStorageSync('getLocation').city;
	data.district = uni.getStorageSync('getLocation').district;
	data.app_id = this.getAppId();
	uni.request({
		url: this.websiteUrl + '/index.php/api/' + path,
		data: data,
		dataType: 'json',
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded',
		},
		success: (res) => {
			if (res.statusCode !== 200 || typeof res.data !== 'object') {
				return false;
			}
			if (res.data.code === -1) {
				// 登录态失效, 重新登录
				// console.log('登录态失效, 重新登录');
				// this.doLogin();
			} else if (res.data.code === 0) {
				this.showError(res.data.msg, function() {
					fail && fail(res);
				});
				return false;
			} else {
				success && success(res.data);
			}
		},
		fail: (res) => {
			// console.log(res,"走我了")
			fail && fail(res);
		},
		complete: (res) => {
			uni.hideLoading();
			complete && complete(res);
		},
	});
};

Vue.prototype.doLogin = function() {
	let pages = getCurrentPages();
	if (pages.length) {
		let currentPage = pages[pages.length - 1];
		if ("pages/login/login" != currentPage.route &&
			"pages/login/weblogin" != currentPage.route &&
			"pages/login/openlogin" != currentPage.route) {
			uni.setStorageSync("currentPage", currentPage.route);
			uni.setStorageSync("currentPageOptions", currentPage.options);
		}
	}
	//公众号
	// #ifdef  H5
	if (this.isWeixin()) {
		window.location.href = this.websiteUrl + '/index.php/api/user.usermp/login?app_id=' + this.getAppId() +
			'&referee_id=' + uni.getStorageSync('referee_id');
	} else {
		this.gotoPage("/pages/login/weblogin");
	}
	// #endif
	// #ifdef APP-PLUS
	this.gotoPage("/pages/login/openlogin", 'redirect');
	return;
	// #endif
	// 非公众号,跳转授权页面
	// #ifndef  H5
	this.gotoPage("/pages/login/login");
	// #endif
};


/**
 * 显示失败提示框
 */
Vue.prototype.showError = function(msg, callback) {
	uni.showModal({
		title: '友情提示',
		content: msg,
		showCancel: false,
		success: function(res) {
			callback && callback();
		}
	});
};

/**
 * 显示失败提示框
 */
Vue.prototype.showSuccess = function(msg, callback) {
	uni.showModal({
		title: '友情提示',
		content: msg,
		showCancel: false,
		success: function(res) {
			callback && callback();
		}
	});
};

/**
 * 获取应用ID
 */
Vue.prototype.getAppId = function() {
	return this.app_id || 10001;
};

Vue.prototype.compareVersion = function(v1, v2) {
	v1 = v1.split('.')
	v2 = v2.split('.')
	const len = Math.max(v1.length, v2.length)

	while (v1.length < len) {
		v1.push('0')
	}
	while (v2.length < len) {
		v2.push('0')
	}

	for (let i = 0; i < len; i++) {
		const num1 = parseInt(v1[i])
		const num2 = parseInt(v2[i])

		if (num1 > num2) {
			return 1
		} else if (num1 < num2) {
			return -1
		}
	}

	return 0
};


/**
 * 生成转发的url参数
 */
Vue.prototype.getShareUrlParams = function(params) {
	let self = this;
	return utils.urlEncode(Object.assign({
		referee_id: self.getUserId(),
		app_id: self.getAppId()
	}, params));
};

/**
 * 当前用户id
 */
Vue.prototype.getUserId = function() {
	return uni.getStorageSync('user_id');
};

//#ifdef H5
var jweixin = require('jweixin-module');

Vue.prototype.configWx = function(signPackage, shareParams, params) {
	if (signPackage == '') {
		return;
	}
	let self = this;
	jweixin.config(JSON.parse(signPackage));

	let url_params = self.getShareUrlParams(params);

	jweixin.ready(function(res) {
		jweixin.updateAppMessageShareData({
			title: shareParams.title,
			desc: shareParams.desc,
			link: self.websiteUrl + self.h5_addr + shareParams.link + '?' + url_params,
			imgUrl: shareParams.imgUrl,
			success: function() {

			}
		});
		jweixin.updateTimelineShareData({
			title: shareParams.title,
			desc: shareParams.desc,
			link: self.websiteUrl + self.h5_addr + shareParams.link + '?' + url_params,
			imgUrl: shareParams.imgUrl,
			success: function() {

			}
		});
	});
};

Vue.prototype.configWxScan = function(signPackage) {
	if (signPackage == '') {
		return;
	}
	jweixin.config(JSON.parse(signPackage));
	return jweixin;
};
//#endif

/**
 * 获取当前平台
 */
Vue.prototype.getPlatform = function(params) {
	let platform = 'wx';
	// #ifdef  APP-PLUS
	platform = 'app';
	// #endif
	// #ifdef  H5
	if (this.isWeixin()) {
		platform = 'mp';
	} else {
		platform = 'h5';
	}
	// #endif
	return platform;
};

/**
 * 订阅通知,目前仅小程序
 */
Vue.prototype.subMessage = function(temlIds, callback) {
	let self = this;
	// #ifdef  MP-WEIXIN
	//小程序订阅消息
	const version = wx.getSystemInfoSync().SDKVersion;
	if (temlIds && temlIds.length != 0 && self.compareVersion(version, '2.8.2') >= 0) {
		wx.requestSubscribeMessage({
			tmplIds: temlIds,
			success(res) {},
			fail(res) {},
			complete(res) {
				callback();
			},
		});
	} else {
		callback();
	}
	// #endif
	// #ifndef MP-WEIXIN
	callback();
	// #endif
};

Vue.prototype.isWeixin = function() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
};

/**
 * 获取访客
 */
Vue.prototype.getVisitcode = function() {
	let visitcode = uni.getStorageSync('visitcode');
	if (!visitcode) {
		visitcode = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
		visitcode = visitcode.replace(/-/g, "");
		uni.setStorageSync('visitcode', visitcode);
	}

	return visitcode;
};

Vue.prototype.topBarTop = function() {
	// #ifdef MP-WEIXIN
	return uni.getMenuButtonBoundingClientRect().top;
	// #endif
	// #ifndef MP-WEIXIN
	const SystemInfo = uni.getSystemInfoSync();
	return SystemInfo.statusBarHeight;
	// #endif
};
Vue.prototype.topBarHeight = function() {
	// #ifdef MP-WEIXIN
	return uni.getMenuButtonBoundingClientRect().height;
	// #endif
	// #ifndef MP-WEIXIN
	return 0
	// #endif
};
Vue.prototype.yulan = function(e, i) {
	let image_path_arr = [];
	if (!Array.isArray(e)) {
		image_path_arr = [e];
	} else {
		if (e[0].file_path) {
			e.forEach((item, index) => {
				image_path_arr.push(item.file_path)
			})
		} else {
			image_path_arr = e
		}
	}
	let picnum = i * 1;
	uni.previewImage({
		urls: image_path_arr,
		current: picnum,
		indicator: 'default',
	});
}
Vue.prototype.theme = function() {
	return 'theme' + this.$store.state.theme || ''
}
Vue.prototype.footTab = function() {
	return this.$store.state.footTab || ''
}

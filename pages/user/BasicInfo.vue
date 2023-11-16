<template>
	<view>
		<view class="mb30">
			<u-notice-bar :text="text1"></u-notice-bar>
		</view>

		<u--form labelPosition="left" :model="model1" :rules="rules" ref="form1">
			<view class="title">
				在租设备台数:
			</view>
			<u-form-item prop="val.setnumval" borderBottom @click="showset = true;">
				<u--input v-model="model1.val.setnumval" disabled disabledColor="#ffffff" placeholder="请选择"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<block v-if="show">
				<view class="title">
					最早租赁时间:
				</view>
				<u-form-item prop="val.settimeval" borderBottom @click="showtime = true;">
					<u--input v-model="model1.val.settimeval" disabled disabledColor="#ffffff" placeholder="请选择"
						border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
			</block>

			<view class="title">
				征信状态:
			</view>
			<u-form-item prop="userInfo.zhengx" borderBottom>
				<u-radio-group v-model="radiovalue1" placement="row">
					<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist1" :key="index"
						:label="item.name" :name="item.val" @change="radioChange">
					</u-radio>
				</u-radio-group>
			</u-form-item>

			<view class="title">
				芝麻信用分:
			</view>
			<u-form-item prop="val.zmxyfval" borderBottom @click="showzmxyf = true;">
				<u--input v-model="model1.val.zmxyfval" disabled disabledColor="#ffffff" placeholder="请选择"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<view class="title">
				公积金余额:
			</view>
			<u-form-item prop="val.gjjyeval" borderBottom @click="showgjj = true;">
				<u--input v-model="model1.val.gjjyeval" disabled disabledColor="#ffffff" placeholder="请选择"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<view class="title">
				花呗额度:
			</view>
			<u-form-item prop="val.hbedval" borderBottom @click="showhb = true;">
				<u--input v-model="model1.val.hbedval" disabled disabledColor="#ffffff" placeholder="请选择" border="none">
				</u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<view class="title">
				信用卡额度:
			</view>
			<u-form-item prop="val.xykedval" borderBottom @click="showxyk = true;">
				<u--input v-model="model1.val.xykedval" disabled disabledColor="#ffffff" placeholder="请选择"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<view class="title">
				银行贷款额度:
			</view>
			<u-form-item prop="val.yhdkedval" borderBottom @click="showyhkd = true;">
				<u--input v-model="model1.val.yhdkedval" disabled disabledColor="#ffffff" placeholder="请选择"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<u-form-item label="工作单位" placeholder="请输入工作单位" prop="userInfo.gzdw" borderBottom>
				<u--input v-model="model1.userInfo.gzdw" border="none"></u--input>
			</u-form-item>

			<u-form-item label="职业状况" placeholder="请输入当前职业与职位" prop="userInfo.zyzk" borderBottom>
				<u--input v-model="model1.userInfo.zyzk" border="none"></u--input>
			</u-form-item>
			<u-form-item label="学历" placeholder="请输入学历" prop="userInfo.education" borderBottom>
				<u--input v-model="model1.userInfo.education" border="none"></u--input>
			</u-form-item>
			<view class="title">
				收入方式:
			</view>
			<u-form-item prop="userInfo.srfs" borderBottom>
				<u-radio-group v-model="radiovalue2" placement="column">
					<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist2" :key="index"
						:label="item.name" :name="item.val" @change="radioChange2">
					</u-radio>
				</u-radio-group>
			</u-form-item>

			<view class="title">
				收入状况:
			</view>
			<u-form-item prop="val.srzkval" borderBottom @click="showsrzk = true;">
				<u--input v-model="model1.val.srzkval" disabled disabledColor="#ffffff" placeholder="请选择" border="none">
				</u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<view class="title">
				婚姻状况:
			</view>
			<u-form-item prop="userInfo.hyzk" borderBottom>
				<u-radio-group v-model="radiovalue3" placement="row">
					<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist3" :key="index"
						:label="item.name" :name="item.val" @change="radioChange3">
					</u-radio>
				</u-radio-group>
			</u-form-item>

			<view class="title">
				车贷状况:
			</view>
			<u-form-item prop="userInfo.cdzk" borderBottom>
				<u-radio-group v-model="radiovalue4" placement="row">
					<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist4" :key="index"
						:label="item.name" :name="item.val" @change="radioChange4">
					</u-radio>
				</u-radio-group>
			</u-form-item>

			<view class="title">
				社保状况:
			</view>
			<u-form-item prop="userInfo.sbzk" borderBottom>
				<u-radio-group v-model="radiovalue6" placement="row">
					<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist6" :key="index"
						:label="item.name" :name="item.val" @change="radioChange6">
					</u-radio>
				</u-radio-group>
			</u-form-item>


			<view class="title">
				住所属性:
			</view>
			<u-form-item prop="userInfo.zsxz" borderBottom>
				<u-radio-group v-model="radiovalue5" placement="column">
					<u-radio :customStyle="{marginRight:'6rpx'}" v-for="(item, index) in radiolist5" :key="index"
						:label="item.name" :name="item.val" @change="radioChange5">
					</u-radio>
				</u-radio-group>
			</u-form-item>

			<view class="submit">
				<u-button type="primary" text="提交资料" @click="submitForm(model1)"></u-button>
			</view>

			<!-- <view class="submit" v-if="isshiming!=1">
				<u-button type="primary" text="提交资料"@click="submitForm(model1)"></u-button>
			</view>
			
			<view class="submit2" v-else>
				<u-button text="提交资料"></u-button>
			</view> -->

		</u--form>

		<u-action-sheet :show="showset" :actions="setlist" title="请选择在租设备台数" @close="showset = false"
			@select="setSelect">
		</u-action-sheet>

		<u-action-sheet :show="showtime" :actions="timelist" title="请选择最早租赁时间" @close="showtime = false"
			@select="timeSelect">
		</u-action-sheet>

		<u-action-sheet :show="showzmxyf" :actions="zmlist" title="请选择芝麻信用分区间" @close="showzmxyf = false"
			@select="zmSelect">
		</u-action-sheet>

		<u-action-sheet :show="showgjj" :actions="gjjlist" title="请选择公积金金额区间" @close="showgjj = false"
			@select="gjjSelect">
		</u-action-sheet>

		<u-action-sheet :show="showhb" :actions="hblist" title="请选择花呗额度区间" @close="showhb = false" @select="hbSelect">
		</u-action-sheet>

		<u-action-sheet :show="showxyk" :actions="xyklist" title="请选择信用卡额度区间" @close="showxyk = false"
			@select="xykSelect">
		</u-action-sheet>

		<u-action-sheet :show="showyhkd" :actions="yhlist" title="请选择银行贷款额度区间" @close="showyhkd = false"
			@select="yhkdSelect">
		</u-action-sheet>

		<u-action-sheet :show="showsrzk" :actions="srlist" title="请选择月收入状况" @close="showsrzk = false"
			@select="srzkSelect">
		</u-action-sheet>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshiming: "",
				// 滚动通知
				text1: "请如实填写,资料填写越完整,通过率越高",
				// 表单信息
				model1: {
					userInfo: {
						setnum: '', //租赁台数
						settime: '', //租赁时间
						zhengx: '', //征信
						zmxyf: '', //芝麻信用分
						gjjye: '', //公积金余额
						hbed: '', //花呗额度
						xyked: '', //信用卡额度
						yhdked: '', //银行贷款额度
						gzdw: '', //工作单位
						zyzk: '', //职业状况
						education:'',
						srfs: '', //收入方式
						srzk: '', //收入状况
						hyzk: '', //婚姻状况
						cdzk: '', //车贷状况
						zsxz: '', //住所性质
						sbzk: '', //社保状况
					},
					val: {
						setnumval: '', //租赁台数
						settimeval: '', //租赁时间
						zhengxval: '', //征信
						zmxyfval: '', //芝麻信用分
						gjjyeval: '', //公积金余额
						hbedval: '', //花呗额度
						xykedval: '', //信用卡额度
						yhdkedval: '', //银行贷款额度
						srfsval: '', //收入方式
						srzkval: '', //收入状况
						hyzkval: '', //婚姻状况
						cdzkval: '', //车贷状况
						zsxzval: '', //住所性质
						sbzkval: '', //社保状况
					},
				},
				// 选择框的值
				setlist: [{
						name: '0-10台',
						val: 0
					},
					{
						name: '10-20台',
						val: 1
					},
					{
						name: '20-30台',
						val: 2
					},
					{
						name: '30台以上',
						val: 3
					},
				],
				timelist: [{
						name: '一个月以内',
						val: 0
					},
					{
						name: '1-3个月',
						val: 1
					},
					{
						name: '3-6个月',
						val: 2
					},
					{
						name: '6-12个月',
						val: 3
					},
					{
						name: '12个月以上',
						val: 4
					},
				],
				radiolist1: [{
						name: '良好',
						val: 1,
						disabled: false
					},
					{
						name: '违约',
						val: 2,
						disabled: false
					},
					{
						name: '黑户',
						val: 3,
						disabled: false
					}
				],
				radiovalue1: '',
				zmlist: [{
						name: '350-550分',
						val: 1
					},
					{
						name: '550-600分',
						val: 2
					},
					{
						name: '600-650分',
						val: 3
					},
					{
						name: '650-700分',
						val: 4
					},
					{
						name: '700-950分',
						val: 5
					}
				],
				gjjlist: [{
						name: '无公积金',
						val: 1
					},
					{
						name: '1万元以下',
						val: 2
					},
					{
						name: '1-2万元',
						val: 3
					},
					{
						name: '2-3万元',
						val: 4
					},
					{
						name: '3-5万元',
						val: 5
					},
					{
						name: '5万元以上',
						val: 6
					}
				],
				hblist: [{
						name: '无花呗额度',
						val: 1
					},
					{
						name: '1000元以下',
						val: 2
					},
					{
						name: '1000-3000元',
						val: 3
					},
					{
						name: '3000-5000元',
						val: 4
					},
					{
						name: '5000-10000元',
						val: 5
					},
					{
						name: '1万元以上',
						val: 6
					}
				],
				xyklist: [{
						name: '无信用卡额度',
						val: 1
					},
					{
						name: '5000元以下',
						val: 2
					},
					{
						name: '5000-10000元',
						val: 3
					},
					{
						name: '1-2万元',
						val: 4
					},
					{
						name: '2-5万元',
						val: 5
					},
					{
						name: '5万元以上',
						val: 6
					}
				],
				yhlist: [{
						name: '无银行贷款额度',
						val: 1
					},
					{
						name: '5000元以下',
						val: 2
					},
					{
						name: '5000-10000元',
						val: 3
					},
					{
						name: '1-2万元',
						val: 4
					},
					{
						name: '2-5万元',
						val: 5
					},
					{
						name: '5万元以上',
						val: 6
					}
				],
				radiolist2: [{
						name: '银行转账',
						val: 1,
						disabled: false
					},
					{
						name: '支付宝/微信',
						val: 2,
						disabled: false
					},
					{
						name: '现金收账',
						val: 3,
						disabled: false
					}
				],
				radiovalue2: '',
				srlist: [{
						name: '1000元以下',
						val: 1
					},
					{
						name: '1000-3000元',
						val: 2
					},
					{
						name: '3000-5000元',
						val: 3
					},
					{
						name: '5000-7000元',
						val: 4
					},
					{
						name: '7000-9000元',
						val: 5
					},
					{
						name: '9000-10000元',
						val: 6
					},
					{
						name: '1-2万元',
						val: 7
					},
					{
						name: '2-3万元',
						val: 8
					},
					{
						name: '3万元以上',
						val: 9
					},
				],
				radiovalue3: '',
				radiovalue4: '',
				radiovalue5: '',
				radiovalue6: '',
				radiolist3: [{
						name: '未婚',
						val: 10,
						disabled: false
					},
					{
						name: '已婚',
						val: 20,
						disabled: false
					},
					{
						name: '丧偶',
						val: 30,
						disabled: false
					},
					{
						name: '离异',
						val: 40,
						disabled: false
					},
					{
						name: '未知',
						val: 99,
						disabled: false
					}
				],
				radiolist4: [{
						name: '无车贷',
						val: 1,
						disabled: false
					},
					{
						name: '有车贷',
						val: 2,
						disabled: false
					}
				],
				radiolist5: [{
						name: '自置',
						val: 1,
						disabled: false
					},
					{
						name: '按揭',
						val: 2,
						disabled: false
					},
					{
						name: '亲属楼宇',
						val: 3,
						disabled: false
					},
					{
						name: '宿舍',
						val: 4,
						disabled: false
					},
					{
						name: '租房',
						val: 5,
						disabled: false
					},
					{
						name: '共有住宅',
						val: 6,
						disabled: false
					},
					{
						name: '借住',
						val: 12,
						disabled: false
					},
					{
						name: '未知',
						val: 9,
						disabled: false
					}
				],
				radiolist6: [{
						name: '无社保',
						val: 1,
						disabled: false
					},
					{
						name: '有社保',
						val: 2,
						disabled: false
					}
				],
				// 校验规则
				rules: {
					'userInfo.setnum': {
						type: 'string',
						required: true,
						message: '请选择设备台数',
						trigger: ['blur', 'change']
					},
					'userInfo.settime': {
						type: 'string',
						required: true,
						message: '请选择租赁时间',
						trigger: ['blur', 'change']
					},
					'userInfo.zhengx': {
						type: 'string',
						required: true,
						min: 1,
						message: '请选择征信状态',
						trigger: ['blur', 'change']
					},
				},
				// 是否显示
				showset: false,
				showtime: false,
				show: false,
				showzmxyf: false,
				showgjj: false,
				showhb: false,
				showxyk: false,
				showyhkd: false,
				showsrzk: false
			}
		},
		onLoad() {
			this.getData();
			if (this.model1.val.setnumval != '无') {
				this.show = true;
			}
		},
		methods: {
			// 提交资料
			submitForm() {
				console.log(this.model1.userInfo);
				// return
				uni.showLoading({
					title: '提交中,请勿离开页面'
				});
				this._post('user.user/realNameAuthentication', {
					zaizu: this.model1.userInfo.setnum,
					zaizutime: this.model1.userInfo.settime,
					zhengxin: this.model1.userInfo.zhengx,
					zmxinyongfen: this.model1.userInfo.zmxyf,
					gjjmoney: this.model1.userInfo.gjjye,
					huabei: this.model1.userInfo.hbed,
					creditCardLimit: this.model1.userInfo.xyked,
					bankLoanLimit: this.model1.userInfo.yhdked,
					cpnName: this.model1.userInfo.gzdw,
					zhiye: this.model1.userInfo.zyzk,
					education:this.model1.userInfo.education,
					incometype: this.model1.userInfo.srfs,
					income: this.model1.userInfo.srzk,
					marriStatus: this.model1.userInfo.hyzk,
					carLoan: this.model1.userInfo.cdzk,
					resiStatus: this.model1.userInfo.zsxz,
					shebao: this.model1.userInfo.sbzk,
					isshiming: 1
				}, function(res) {
					// console.log(res);
					uni.hideLoading();
					if (res.code == 1) {
						uni.showToast({
							title: res.msg,
							duration: 2000
						});
						uni.navigateTo({
							url:"/pages/user/authentication"
						})
					} else {
						uni.showToast({
							title: "提交失败,请重新提交或联系客服!!",
							duration: 2000
						});
					}
				});
			},
			// 获取数据
			getData() {
				let self = this;
				self._get(
					'user.index/detail', {},
					function(res) {
						// console.log(res.data.userInfo, "成功返回");
						// console.log(res.data.userInfo.zaizu, "成功返回");
						self.isshiming = res.data.userInfo.isshiming;
						for (let var1 of self.setlist) {
							if (var1.val == res.data.userInfo.zaizu) {
								self.model1.userInfo.setnum = var1.val;
								self.model1.val.setnumval = var1.name;
							}
						}
						for (let var2 of self.timelist) {
							if (var2.val == res.data.userInfo.zaizutime) {
								self.model1.userInfo.settime = var2.val;
								self.model1.val.settimeval = var2.name;
							}
						}
						if (res.data.userInfo.zhengxin) {
							self.model1.userInfo.zhengx = res.data.userInfo.zhengxin;
							self.radiovalue1 = res.data.userInfo.zhengxin;
						}
						for (let var3 of self.zmlist) {
							if (var3.val == res.data.userInfo.zmxinyongfen) {
								self.model1.userInfo.zmxyf = var3.val;
								self.model1.val.zmxyfval = var3.name;
							}
						}
						for (let var4 of self.gjjlist) {
							if (var4.val == res.data.userInfo.gjjmoney) {
								self.model1.userInfo.gjjye = var4.val;
								self.model1.val.gjjyeval = var4.name;
							}
						}
						for (let var5 of self.hblist) {
							if (var5.val == res.data.userInfo.huabei) {
								self.model1.userInfo.hbed = var5.val;
								self.model1.val.hbedval = var5.name;
							}
						}
						for (let var6 of self.xyklist) {
							if (var6.val == res.data.userInfo.creditCardLimit) {
								self.model1.userInfo.xyked = var6.val;
								self.model1.val.xykedval = var6.name;
							}
						}
						for (let var7 of self.yhlist) {
							if (var7.val == res.data.userInfo.bankLoanLimit) {
								self.model1.userInfo.yhdked = var7.val;
								self.model1.val.yhdkedval = var7.name;
							}
						}
						if (res.data.userInfo.cpnName) {
							self.model1.userInfo.gzdw = res.data.userInfo.cpnName;
						}
						if (res.data.userInfo.zhiye) {
							self.model1.userInfo.zyzk = res.data.userInfo.zhiye;
						}
						if(res.data.userInfo.education){
							self.model1.userInfo.education = res.data.userInfo.education
						}
						if (res.data.userInfo.incometype) {
							self.model1.userInfo.srfs = res.data.userInfo.incometype;
							self.radiovalue2 = res.data.userInfo.incometype;
						}
						for (let var8 of self.srlist) {
							if (var8.val == res.data.userInfo.income) {
								self.model1.userInfo.srzk = var8.val;
								self.model1.val.srzkval = var8.name;
							}
						}
						if (res.data.userInfo.marriStatus) {
							self.model1.userInfo.hyzk = res.data.userInfo.marriStatus;
							self.radiovalue3 = res.data.userInfo.marriStatus;
						}
						if (res.data.userInfo.carLoan) {
							self.model1.userInfo.cdzk = res.data.userInfo.carLoan;
							self.radiovalue4 = res.data.userInfo.carLoan;
						}
						if (res.data.userInfo.resiStatus) {
							self.model1.userInfo.zsxz = res.data.userInfo.resiStatus;
							self.radiovalue5 = res.data.userInfo.resiStatus;
						}
						if (res.data.userInfo.shebao) {
							self.model1.userInfo.sbzk = res.data.userInfo.shebao;
							self.radiovalue6 = res.data.userInfo.shebao;
						}
					}
				);
			},
			setSelect(e) {
				console.log(e);
				this.model1.userInfo.setnum = e.val;
				this.model1.val.setnumval = e.name;
				this.$refs.form1.validateField('userInfo.setnum');
				if (this.model1.val.setnumval != '无') {
					this.show = true;
				}
			},
			timeSelect(e) {
				this.model1.userInfo.settime = e.val;
				this.model1.val.settimeval = e.name;
				this.$refs.form1.validateField('userInfo.settime');
			},
			zmSelect(e) {
				this.model1.userInfo.zmxyf = e.val;
				this.model1.val.zmxyfval = e.name;
				this.$refs.form1.validateField('userInfo.zmxyf');
			},
			gjjSelect(e) {
				this.model1.userInfo.gjjye = e.val;
				this.model1.val.gjjyeval = e.name;
				this.$refs.form1.validateField('userInfo.gjjye');
			},
			hbSelect(e) {
				this.model1.userInfo.hbed = e.val;
				this.model1.val.hbedval = e.name;
				this.$refs.form1.validateField('userInfo.hbed');
			},
			xykSelect(e) {
				this.model1.userInfo.xyked = e.val;
				this.model1.val.xykedval = e.name;
				this.$refs.form1.validateField('userInfo.xyked');
			},
			yhkdSelect(e) {
				this.model1.userInfo.yhdked = e.val;
				this.model1.val.yhdkedval = e.name;
				this.$refs.form1.validateField('userInfo.yhdked');
			},
			srzkSelect(e) {
				this.model1.userInfo.srzk = e.val;
				this.model1.val.srzkval = e.name;
				this.$refs.form1.validateField('userInfo.srzk');
			},
			radioChange(n) {
				console.log('radioChange', n);
				this.model1.userInfo.zhengx = n;
			},
			radioChange2(n) {
				console.log('radioChange', n);
				this.model1.userInfo.srfs = n;
			},
			radioChange3(n) {
				console.log('radioChange', n);
				this.model1.userInfo.hyzk = n;
			},
			radioChange4(n) {
				console.log('radioChange', n);
				this.model1.userInfo.cdzk = n;
			},
			radioChange5(n) {
				console.log('radioChange', n);
				this.model1.userInfo.zsxz = n;
			},
			radioChange6(n) {
				console.log('radioChange', n);
				this.model1.userInfo.sbzk = n;
			},
		},
	}
</script>

<style lang="scss">
	page {
		padding: 0 20rpx;
	}

	.title {
		font-size: 30rpx;
		margin: 5rpx;
	}

	.submit {
		margin: 35rpx 20rpx;
		background-color: #F2AE3F;
		color: white;
	}

	.submit2 {
		margin: 35rpx 20rpx;
		background-color: #DCDFE6;
		color: white;
	}
</style>

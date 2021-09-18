<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"
        style=" margin-left:30px;">
        小微企业人才管理系统
      </el-menu-item>
      <el-menu-item
        style="width:600px; margin-left:100px;">
        <div>
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
            clearable="true">
            <el-select
              v-model="select"
              slot="prepend"
              placeholder="请选择">
              <el-option
                label="用户邮箱"
                value="1">
              </el-option>
              <el-option
                label="企业名"
                value="2">
              </el-option>
              <el-option
                label="岗位"
                value="3">
              </el-option>
            </el-select>
            <el-button
              slot="append"
              icon="el-icon-search">
            </el-button>
          </el-input>
        </div>
      </el-menu-item>
      <el-menu-item index="4"
        style=" margin-left:50px;">
        <a href="https://www.ele.me"
          target="_blank">订单管理</a>
      </el-menu-item>
      <el-menu-item index="3"
        style=" margin-left:150px;">
        消息中心</el-menu-item>
      <el-submenu index="2"
        style=" margin-left:30px;">
        <template
          slot="title">我的工作台</template>
        <el-menu-item
          index="2-1">个人中心
        </el-menu-item>
        <el-menu-item
          index="2-2">我的简历
        </el-menu-item>
        <el-menu-item
          index="2-3">投递记录
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="banner">
      <div class="intro">
          <a :href="introList[currentIndex]" target="_blank">     
            <p v-for="intro in intros" :key="intro.i">
              {{intro}}
            </p>       
           </a>
      </div>
      <div class="item">
        <a :href="introList[currentIndex]">
           <img
          :src="dataList[currentIndex]">
        </a>
      </div>
      <div class="page"
        v-if="this.dataList.length > 1">
        <ul>
          <li
            @click="gotoPage(prevIndex)">
            &lt;</li>
          <li
            v-for="(item,index) in dataList"
            :key="item.id"
            @click="gotoPage(index)"
            :class="{'current':currentIndex == index}">
            {{index+1}}</li>
          <li
            @click="gotoPage(nextIndex)">
            &gt;</li>
        </ul>
      </div>
    </div>
     <el-select v-model="value1" multiple placeholder="地点" class="choose">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="岗位">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-descriptions  direction="vertical" :column="4" border>
  <el-descriptions-item label="企业名">kooriookami</el-descriptions-item>
  <el-descriptions-item label="HR手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="工作地点" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="招聘岗位">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
<el-descriptions  direction="vertical" :column="4" border>
  <el-descriptions-item label="企业名">kooriookami</el-descriptions-item>
  <el-descriptions-item label="HR手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="工作地点" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="招聘岗位">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
<el-descriptions  direction="vertical" :column="4" border>
  <el-descriptions-item label="企业名">kooriookami</el-descriptions-item>
  <el-descriptions-item label="HR手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="工作地点" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="招聘岗位">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
<el-descriptions  direction="vertical" :column="4" border>
  <el-descriptions-item label="企业名">kooriookami</el-descriptions-item>
  <el-descriptions-item label="HR手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="工作地点" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="招聘岗位">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input1: '',
      input2: '',
      input3: '',
      select: '',
      introList: [
        'https://app.mokahr.com/campus_apply/trip/37757?sourceToken=20b363145e8976b98c781951a2663ce5#/',
        'https://app.mokahr.com/campus_apply/mihoyo/7525?sourceToken=ca187c7a016725a66fe61c38caeec94f#/',
        'https://app.mokahr.com/campus_apply/leyuansu/2357?sourceToken=bac71af97cba474b9d17a59406c1f534#/'
      ],
      intros:[
        '携程',
        '米哈游',
        '乐元素'
      ],
      dataList: [
        'https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg',
        'https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg',
        'https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg',
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
        value2: []
    }
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    gotoPage(index) {
      this.currentIndex = index
    },
     runInv() {
    this.timer = setInterval(() => {
    this.gotoPage(this.nextIndex)
  }, 2000)
}
  },
  mounted: function(){
    this.runInv();
  }
}
</script>

<style scoped>
/* 顶部栏 */
.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
/* 轮播图 */
.banner ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner ul li:hover{
  color: #ff6700;
}

.banner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
}
/* 文字介绍 */
.banner .intro{
  background-color: rgb(49, 48, 48);
  width: 200px;
  height: 375px;
  float: left;
  border-radius: 5px 0px 0px 5px;
}
.banner .intro a{
  text-decoration: none;
  color: white;
}
.banner .intro p:hover{
  background-color: black;
}
.banner .intro a p{
  height: 20%;
  width: 100%;
  text-align: center;
  font-size:20px;
  margin: 0px;
  padding-top: 20px;
}
.banner .intro a p:first-child{
  margin-top:18px;
}
/* 轮播图片 */
.banner img {
  max-width: 1000px;
  display: block;
  border-radius:0px 5px 5px 0px;
}
/* 轮播切页 */
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius:0px 0px 5px 5px;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
/* 招聘求职模块 */
.el-select.choose{
  margin-top:30px;
  margin-left: 150px;
}
/* 企业信息 */
.el-descriptions{
  width: 400px;
  margin:20px 150px;
}
</style>
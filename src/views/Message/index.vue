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
          target="_blank">人员管理</a>
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
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template
          slot="title">
          <i
            class="el-icon-chat-dot-round"></i>
          <span>机会沟通</span>
        </template>
        <el-menu-item-group>
          <template
            slot="title">分组一</template>
          <el-menu-item
            index="1-1">选项1
          </el-menu-item>
          <el-menu-item
            index="1-2">选项2
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group
          title="分组2">
          <el-menu-item
            index="1-3">选项3
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu
          index="1-4">
          <template
            slot="title">选项4</template>
          <el-menu-item
            index="1-4-1">选项1
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i
          class="el-icon-message"></i>
        <span
          slot="title">系统消息</span>
      </el-menu-item>
      <el-menu-item index="3"
        disabled>
        <i
          class="el-icon-document"></i>
        <span
          slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i
          class="el-icon-position"></i>
        <span
          slot="title">通知</span>
      </el-menu-item>
    </el-menu>
    <div class="jwchat">
    <JwChat-index
      :config="config"
      :showRightBox='true'
      scrollType="noroll"
      :taleList="taleList"
      @enter="bindEnter"
      @clickTalk="talkEvent"
      v-model="inputMsg"
      :toolConfig="tool"
      :winBarConfig="winBarConfig" />
      template slot="tools">
     <div style="width: 20rem; text-align: right" @click="toolEvent(12)">
      <JwChat-icon type="icon-lishi" title="自定义" />
      </div>
    </div>
  </div>
</template>
<script>
const img = "https://www.baidu.com/img/flexible/logo/pc/result.png";
const listData = [
  {
    date: "2020/04/25 21:19:07",
    text: {
      text: "<i class='el-icon-document-checked' style='font-size:2rem;'/>",
      subLink: {
        text: "a.txt",
        prop: {
          underline: false,
        },
      },
    },
    mine: false,
    name: "留恋人间不羡仙",
    img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
  },
  {
    date: "",
    text: { text: "起床不" },
    mine: false,
    name: "留恋人间不羡仙",
    img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
  },
  {
    text: "2020/04/25 21:19:07",
    type: "tip",
  },
  {
    date: "2020/04/25 21:19:07",
    text: {
      text: "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>",
    },
    mine: false,
    name: "只盼流星不盼雨",
    img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
  },
  {
    date: "2020/04/25 21:19:07",
    text: { text: "<img data-src='" + img + "'/>" },
    mine: false,
    name: "只盼流星不盼雨",
    img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
  },
  {
    date: "2020/04/16 21:19:07",
    text: {
      text: "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />",
    },
    mine: true,
    name: "JwChat",
    img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
  },
  {
    date: "2021/03/02 13:14:21",
    mine: false,
    name: "留恋人间不羡仙",
    img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
    text: {
      system: {
        title: "在接入人工前，智能助手将为您首次应答。",
        subtitle: "猜您想问:",
        content: [
          {
            id: `system1`,
            text: "组件如何使用",
          },
          {
            id: `system2`,
            text: "组件参数在哪里查看",
          },
          {
            id: "system",
            text: "我可不可把组件用在商业",
          },
        ],
      },
    },
  },
];
function getListArr(size) {
  const listSize = listData.length;
  if (!size) {
    size = listSize;
  }
  let result = [];
  for (let i = 0; i < size; i++) {
    const item = listData[(Math.random() * listSize) >> 0];
    item.id = Math.random().toString(16).substr(-6);
    result.push(item);
  }
  return result;
}
export default {
  data () {
    return {
      inputMsg: '',
      taleList: [],
      tool: {
        // show: ['file', 'history', 'img', ['文件1', '', '美图']],
        // showEmoji: false,
        callback: this.toolEvent
      },
      config:{},
      winBarConfig:{},

    }
  },
  methods: {
     // 切换用户窗口，加载对应的历史记录
    bindWinBar(play = {}) {
      const { type, data = {} } = play;
      console.log(play);
      if (type === "winBar") {
        const { id, dept, name, img } = data;
        this.config = { ...this.config, id, dept, name, img };
        this.winBarConfig.active = id;
        if (id === "win00") {
          this.taleList = getListArr();
        } else this.taleList = getListArr((Math.random() * 4) >> 0);
      }
      if (type === "winBtn") {
        const { target: { id } = {} } = data;
        const { list } = this.winBarConfig;
        this.winBarConfig.list = list.reduce((p, i) => {
          if (id != i.id) p.push(i);
          return p;
        }, []);
      }
    },
    // 点击聊天框列中的用户和昵称触发事件
    talkEvent(play) {
      console.log(play);
    },
    // 输入框点击就发送或者回车触发的事件
    bindEnter(e) {
      console.log(e);
      const msg = this.inputMsg;
      if (!msg) return;
      const msgObj = {
        date: "2020/05/20 23:19:07",
        text: { text: msg },
        mine: true,
        name: "JwChat",
        img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
      };
      this.taleList.push(msgObj);
    },
    // 快捷回复，组件点击选中事件
    bindTalk(play) {
      console.log("talk", play);
      const { key, value } = play;
      if (key === "navIndex" && value == "1") {
        this.talk = ["回复1", "回复2", "回复3"];
      }
      if (key === "navIndex" && value == "2") {
        this.talk = ["超级回复1", "超级回复2", "超级回复3"];
      }
      if (key === "select") {
        this.inputMsg = value;
        // this.bindEnter();
      }
      if (key === "delIndex") {
        this.talk.splice(value, 1);
      }
    },
    /**
     * @description: 点击加载更多的回调函数
     * @param {*}
     * @return {*}
     */
    bindLoadHistory() {
      const history = new Array(3).fill().map((i, j) => {
        return {
          date: "2020/05/20 23:19:07",
          text: { text: j + new Date() },
          mine: false,
          name: "JwChat",
          img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
        };
      });
      let list = history.concat(this.list);
      this.taleList = list;
      console.log("加载历史", list, history);
    },
    /**
     * @description:
     * @param {*} type 当前点击的按钮
     * @param {*} plyload 附加文件或者需要处理的数据
     * @return {*}
     */
    toolEvent(type, plyload) {
      console.log("tools", type, plyload);
    },
    bindCover(event) {
      console.log("header", event);
    },
    rightClick(type) {
      console.log("rigth", type);
    },
  },
  mounted() {
    this.taleList = getListArr();
  },
}
</script>
<style scoped>
.el-menu-vertical {
  margin: 50px 200px;
  width: 200px;
}
.jwchat {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  margin-left: 60px;
  margin-top:-200px;
}
</style>
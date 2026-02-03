### vue弹窗
```
<div id="app">
    <button @click="change">显示</button>

    <div class="pop" v-show="isshow">
        <div class="box">
            <h1>我是弹窗</h1>
            <!-- 注册点击事件，一点击就关闭弹窗 -->
            <button @click="hidePopup">关闭</button>
        </div>
    </div>
</div>
```
<br>

```
<script>
    const app = new Vue({                                        
        el:'#app',                                               
        data:{
            isshow: false
        },
        methods:{
            change ( ) {
                this.isshow = true
                console.log('打开了弹窗')
            },
            hidePopup( ){
                this.isshow = false
                console.log('关闭了弹窗')
            },
        }
    })
</script>
```
<br>

```
<style>
     .pop {
        position: fixed; /* 固定定位，不随页面滑动变化 */
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2); /* 半透明背景 */
    }
    .box {
        width: 200px;
        height: 200px;
        background-color: #fff;
        /* 弹窗始终居中于页面 */
        position: fixed; /* 固定定位，不随页面滑动变化 */
        left: 50%;
        top: 40%;
    }
</style>
```
![这是图片](../image/vueoperation/vuewindow.png "Magic Gardens")
<hr>

### 创建Vue实例，初始化渲染
核心步骤<br>
1、准备容器（Vue所管理的范围）<br>
2、引包。引入开发版本的包<br>
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
```
3、创建实例<br>
4、添加配置项 => 完成渲染 
```
const app = new Vue({                                        
    el:'#app',                                               
    data:{
        msg:'hello 黑马',
        count:666
    }
})
```
<span style="color: red;">解析</span>
<br>
el:'类名'                      →表示：指定挂载点<br>
data:{数据}                    →表示：把数据写在这里

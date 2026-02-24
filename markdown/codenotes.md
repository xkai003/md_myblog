### a标签
```
<a href="#">我是xxx</a>
```
<code>text-decoration:none;</code> 去掉下划线<br>
underline 下划线<br>
line-through 中划线<br>
overline 上划线<br><br>
<code>a:link{}</code> 点击之前<br>
:visited 点击之后<br>
:active 按住不松手<br>
:hover 停留时<br>
(<br>
&ensp;停留时的属性大全：<br>
&ensp;cursor:pointer; 变成小手<br>
&ensp;cursor:text; 变成光标<br>
&ensp;cursor:move; 变成四角箭头<br>
&ensp;cursor:default; 变成小白
<br>)<br>
<hr>

### 列表标签
```
无序列表：<ol></ol>
有序列表：<ul> <li></li> </ul>
定义列表：<dl>、<dt>、<dd>
```
<hr>
list-style: none; →去掉ul标签的圆点<br>
（disc实心原点，默认、square实心方点、circle空心圆。）<br>
去掉ul标签的圆点和它默认的缩进

```
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
```
让各li标签左浮动
```
ul li{
    float: left;
}
```

### 字体标签
```
font
```
####
font-size:10px;  →字体大小<br>
font-family:"宋体";  →字体类型<br>
font-weight: bold;  →字体加粗（normal不加粗）<br>
font-style: italic;  →斜体<br>
letter-spacing: 1cm;  →字与字的间距<br>
opacity: 0.1;  →文本透明度(数值只能在0~1之间)<br>
visibility:visible;  →文本可见度（hidden不可见）<br>
<hr>

### 文本标签
```
<p>我是段落</p>
<span>我是文本</span>
```
line-height:24px; →行间距<br>
text-align: center; →文本居中<br>
(center居中、left左边、right右边、top顶端)<br>
text-align: justify; →设置文字两端对齐<br>
text-transform: lowercase; →单词小写<br>
（uppercase单词大写、capitalize每个单词的首字母大写）<br>
text-indent: 2em; →首行缩进2各字符<br>
text-overflow: ellipsis; →超出部分用...代替<br>
text-shadow: 20px 27px 22px pink; →凹凸文字效果<br>
（参数解释：水平位移 垂直位移 模糊程度 阴影颜色。）<br>
```
.item .desc .Introduction{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 最多显示两行，多余的部分用...代替 */
    overflow: hidden; /* 隐藏超出的部分 */
    word-break: break-all;
    /* text-indent: 2em;  首行缩进2各字符 */
}
```
<hr>

### 表格标签

```
<table cellspacing="0" width="300" border="0">
    <tr align="center">
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td rowspan="2" bgcolor="pink">47</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>

        <td>8</td>
        <td>9</td>
    </tr>
</table>
```
rowspan="2" →纵向合并2个单元格<br>
colspan="2" →横向合并2个单元格<br>
cellspacing="0" →合并单元格内部的线条<br>
<hr>

### 盒子模型
```
<div class=”box”></div>
```
float:left →左浮动<br>
（right 右浮动）<br>
overflow:hidden;→清除浮动<br>
border: 1px solid red; →边框<br>
border-style:dashed; →边框为虚线<br>
（dashed 虚线、solid实线）<br>
border-radius:15%; →边框圆角<br>
border-image; →边框图片<br>
width="500" →长度<br>
height=”500” →高度<br>
box-shadow:1px 20px 20px -2px rgb(197, 196, 196) →边框阴影<br>
（水平偏移、垂直偏移、模糊程度、阴影大小、阴影颜色）<br>
padding: 10px 15px 10px 15px; →内边距<br>
（上、右、下、左）<br>
margin: 10px 15px 10px 15px; →外边距<br>
（上、右、下、左）<br>
background-color:red; →背景颜色<br>
background-repeat:no-repeat; →背景图片不平铺<br>
（repeat-x横向平铺、repeat-y纵向平铺）<br>
background-attachment:Fixed; →设置背景图片固定<br>
（Fixed 固定；scroll 不固定）<br>
background: url("./tp.png") left bottom;→设置背景图片<br>
background-size:cover; →设置背景图片尺寸<br>
（Cover 图片始终填充满容器，且保证长宽比不变；<br>
Contain 将图片完整地显示在容器中，且保证长宽比不变。）<br>
background-position:top; →设置背景定位<br>
border-bottom: 2px solid #2e6ec6; →盒子下划线<br>
background-color: rgba(0, 0, 0, 0.2); →半透明背景<br>
opacity: 0 →透明度为0<br>

### 内嵌框架标签，可以用来放视频
```
<iframe 
    src="./01.mp4" width="560" height="315"
    allowfullscreen
    ?autoplay=0>
</iframe>
```
例如：
（注：1、allowfullscreen: 可以全屏。如果是sandbox就不可以全屏
2、?autoplay=0：进入页面不会自动播放）
<hr>

### 输入框
```
输入框：<input type="text" placeholder="请输入时间">
文本框：<textarea></textarea>
密码框：<input type="password">
序号框：<input type="number">
搜索框：<input type="search">
链接框：<input type="url">
邮箱框：<input type="email">
进度条：<input type="range">
多选框：<input type="checkbox">
单选框：<input type="radio" name="gender">（二者都加上name="gender"为单选）
时间框：<input type="time">
月份框：<input type="date">
重置框：<input type="reset">
提交框：<input type="submit">
选择图片文件框：<input type="file" placeholder="更改头像">
```
<hr>

### 动画
```
<div class=”box”></div>
```
<br>

```
.box{
    width: 100px;
    height: 100px;
    background-color: rgb(137, 204, 230);
    transition: transform 3s linear 0s;
}
.box:hover{
    transform: rotate(45deg);
}
```
<br>

```
transition: transform 3s linear 0s; →过渡
（transition: 让哪些属性进行过度 过渡的持续时间 运动曲线 延迟时间;）
transform: 
translate(-50%, -50%);（水平位移, 垂直位移）→位移
rotate(45deg);（顺时针旋转45度，负为逆）→平面旋转
rotateX(360deg);（顺时针旋转360度，负为逆）→沿X轴旋转
rotateY(360deg);（顺时针旋转360度，负为逆）→沿Y轴旋转
translateZ(360px);（顺时针旋转360度，负为逆）→沿Z轴旋转
```
<hr>

### 鼠标停留时图片缓慢放大效果
```
<div class="zoom-img">
    <img src="./tp.png" alt="">
</div>
```
<br>

```
.zoom-img{
    width: 300px;
    height: 200px;
    overflow: hidden;
}
.zoom-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.zoom-img:hover img{
    transform: scale(1.2);
}
```


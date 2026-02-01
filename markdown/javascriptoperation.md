### 输出输入语句
```
Document.write(‘我是tmk’)               →内容显示在网页中
alert(‘请确认信息无误’)                 →页面上方弹窗警告（只有确定按钮）
Console.log(‘控制台打印’)               →内容显示在控制台中
Prompt(‘请输入您的姓名’)                →页面上弹出输入框窗口（有确定、取消按钮
```

<hr>

### 退出登录实操笔记
```
    logoutbtn() {
      const e = confirm("确定要退出登录吗？")
      if (e == true) { 
        localStorage.removeItem('userinfo');
        // alert("退出登录成功");
        // 重新刷新页面
        location.reload();
      } else {
        // alert("用户点击了取消按钮"); 
      }
    }
```

<hr>

### 字符串
<code>indexOf()</code><br>
解析：从index为0的地方开始查找，找到第一次出现的值并返回其index值<br>
举例:
```
const str = 'abcdecac';
console.log(str.indexOf('c')); //     打印机结果：2
```
<br>

<code>lastindexOf()</code><br>
解析：从index为0的地方开始查找，找到最后一次出现的值并返回index值<br>
举例:
```
const str = 'abcdecac';
console.log(str.lastIndexOf('c'));//     打印机结果：7
```
<br>

<code>索引值 = str.indexOf(想要查询的字符串, [起始位置])</code><br>
举例:
```
const str = 'abcdecac';
result = str.indexOf('c',3);
console.log(result);
// 从前往后数，字母c分别在下标为2、5、7处，但题目要求要从下标为3的位置开始数，所有下标为3及之前的都不算，所
以返回值为5
```
<br>

<code>search()</code><br>
解析：获取字符串中指定内容的索引（参数里一般是正则）<br>
举例:
```
const name = 'qianguyihao';
console.log(name.search('yi')); // 打印结果：6
```
<br>

<code>includes()</code><br>
解析：判断字符串中是否包含指定的内容<br>
举例:
```
const name = 'qianguyihao';
console.log(name.includes('yi')); 
 // 打印结果：true
console.log(name.includes('haha'));
// 打印结果：false
```
<br>

<code>startsWith()</code><br>
解析：字符串是否以指定的内容开头<br>
举例:
```
const name = 'abcdefg';
console.log(name.startsWith('a')); 
// 打印结果：true
```
<br>

<code>endsWith()</code><br>
解析：字符串是否以指定的内容结尾<br>
举例:
```
const name = 'abcdefg';
console.log(name.endsWith('f'));
 // 打印结果：false 

```
<br>

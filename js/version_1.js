// 3. 更新按钮文本的函数（核心）
function updateFileListBtnText() {
    const btn = document.getElementById('fileListBtn');
    if (!btn) {
        console.warn("未找到ID为fileListBtn的按钮");
        return;
    }
    // 拼接文本：文件列表 (数量)
    btn.textContent = `文件列表 (${mdFiles.length})`;
}
// 定义全局函数（不要嵌套在任何回调里）
function showlist() {
    // 1. 获取目标元素
    const filelist = document.getElementById("filelist");
    
    // 2. 校验元素是否存在，避免报错
    if (!filelist) {
        console.warn("未找到ID为filelist的元素，请检查DOM结构");
        return;
    }
    // 3. 正确的切换逻辑：判断当前显示状态，再切换
    // 获取当前display样式（无内联样式时返回空字符串）
    const currentDisplay = filelist.style.display;
    
    if (currentDisplay === "block" || currentDisplay === "") {
        // 当前是显示状态 → 隐藏
        filelist.style.display = "none";
    } else {
        // 当前是隐藏状态 → 显示
        filelist.style.display = "block";
    }
}

// 1. 预定义 md 文件夹下的所有 Markdown 文件（手动维护）
const mdFiles = [
    'notes.md',
    'work.md'
    // *********新增文件时，在这里添加即可*********
];

// 2. 定义默认加载的文件（解决 filename 未定义问题）
const DEFAULT_FILE = mdFiles[0] || '';

// 3. 页面加载时渲染文件列表 + 加载默认文件
window.onload = function() {
    updateFileListBtnText(); // 初始化按钮文本
    renderFileList();
    loadMarkdownFile(DEFAULT_FILE); // 使用默认文件，而非未定义的 filename
};

// 渲染文件列表
function renderFileList() {
    const listContainer = document.getElementById('file-list-container');
    if (mdFiles.length === 0) {
        listContainer.innerHTML = '<p>暂无 Markdown 文件</p>';
        return;
    }

    // 为每个文件生成可点击的条目
    const fileItems = mdFiles.map(file => 
        `<div class="file-item" onclick="loadMarkdownFile('${file}')">
            <svg t="1769657195785" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10616" width="20" height="20"><path d="M279.272727 558.545455l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM279.272727 698.181818l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM279.272727 139.636364l279.272727 0 0 46.545455-279.272727 0 0-46.545455ZM279.272727 837.818182l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM279.272727 418.909091l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM861.789091 1024c0 0 22.574545 0 22.574545-22.760727L884.363636 204.8 681.239273 0 162.210909 0C162.210909 0 139.636364 0 139.636364 22.760727L139.636364 1001.192727C139.636364 1024 162.210909 1024 162.210909 1024L861.789091 1024zM186.181818 46.545455l465.454545 0 0 139.636364c0 46.545455 46.545455 46.545455 46.545455 46.545455l139.636364 0 0 744.727273L186.181818 977.454545 186.181818 46.545455zM279.272727 279.272727l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z" fill="#272636" p-id="10617"></path></svg>
            ${file}
        </div>`
    ).join('');
    
    listContainer.innerHTML = fileItems;
}

// 加载并渲染指定的 Markdown 文件
async function loadMarkdownFile(filename) {
    const container = document.getElementById('markdown-container');
    try {
        // 拼接文件路径（md 文件夹下）
        const response = await fetch(`./markdown/${filename}`);
        
        if (!response.ok) {
            throw new Error(`文件加载失败: ${response.status}`);
        }

        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        container.innerHTML = htmlContent;

    } catch (error) {
        container.innerHTML = `<p class="error">加载 ${filename} 失败: ${error.message}</p>`;
        console.error('加载错误:', error);
    }
}
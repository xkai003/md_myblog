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
        `<div class="file-item" onclick="loadMarkdownFile('${file}')">${file}</div>`
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
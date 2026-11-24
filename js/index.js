// ============================白天/夜晚 模式切换============================
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleBtn = document.getElementById('themeToggleBtn');
    const toggleBtnspan = document.getElementById('themeToggleBtnspan');
    const headstatus = document.getElementById('headstatus');

    // 初始化：从本地存储读取用户上次的选择
    function initTheme() {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode === 'night') {
            setNightMode();
        } else {
            setDayMode(); // 默认白天模式
        }
    }
    // 设置白天模式
    function setDayMode() {
        body.classList.remove('night-mode');
        localStorage.setItem('themeMode', 'day');
        headstatus.style.backgroundColor = "rgb(240, 240, 240)";
        document.querySelector('#themeToggleBtnspan').innerHTML =
            `<svg t="1795510677281" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6168" width="30" height="30"><path d="M512.298667 831.146667a32 32 0 0 1 32 32v42.666666a32 32 0 0 1-64 0v-42.666666a32 32 0 0 1 32-32z m270.933333-93.461334l30.165333 30.165334a32 32 0 1 1-45.248 45.248L737.984 782.933333a32 32 0 0 1 45.248-45.248z m-496.597333 0a32 32 0 0 1 0 45.226667l-30.186667 30.186667a32 32 0 0 1-45.226667-45.248l30.144-30.165334a32 32 0 0 1 45.269334 0zM512 234.666667c153.173333 0 277.333333 124.16 277.333333 277.333333s-124.16 277.333333-277.333333 277.333333-277.333333-124.16-277.333333-277.333333 124.16-277.333333 277.333333-277.333333z m0 64c-117.824 0-213.333333 95.509333-213.333333 213.333333s95.509333 213.333333 213.333333 213.333333 213.333333-95.509333 213.333333-213.333333-95.509333-213.333333-213.333333-213.333333z m394.112 181.333333a32 32 0 0 1 0 64h-42.666667a32 32 0 0 1 0-64h42.666667z m-744.96 0a32 32 0 0 1 0 64h-42.666667a32 32 0 0 1 0-64h42.666667zM813.397333 210.901333a32 32 0 0 1 0 45.248l-30.165333 30.165334a32 32 0 0 1-45.248-45.226667l30.165333-30.186667a32 32 0 0 1 45.248 0z m-556.949333 0l30.186667 30.165334a32 32 0 1 1-45.269334 45.248L211.2 256.149333a32 32 0 1 1 45.248-45.248zM512.298667 86.186667a32 32 0 0 1 32 32v42.666666a32 32 0 0 1-64 0v-42.666666a32 32 0 0 1 32-32z" fill="#333333" p-id="6169"></path></svg>`;
        console.log('当前为白天模式');
    }
    // 设置夜晚模式
    function setNightMode() {
        body.classList.add('night-mode');
        localStorage.setItem('themeMode', 'night');
        headstatus.style.backgroundColor = "black";
        document.querySelector('#themeToggleBtnspan').innerHTML =
            `<svg t="1795510759250" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8002" width="30" height="30"><path d="M570.67 172.32A358.8 358.8 0 0 1 630 370.54c0 199.13-161.39 360.56-360.52 360.56a362.46 362.46 0 0 1-61.24-5.21c64.49 97.79 175.3 162.34 301.2 162.34C708.57 888.23 870 726.8 870 527.67c0-178.25-129.36-326.27-299.33-355.35z" fill="#F7D134" p-id="8003"></path><path d="M457.81 886.68a375.86 375.86 0 0 1-314.55-169.53 16 16 0 0 1 16.05-24.57 348.2 348.2 0 0 0 58.54 5c190 0 344.56-154.57 344.56-344.56a343.06 343.06 0 0 0-56.72-189.41A16 16 0 0 1 521.75 139a376.55 376.55 0 0 1-63.94 747.68zM191.38 728.62a343.78 343.78 0 0 0 266.43 126.06c190 0 344.56-154.56 344.56-344.55 0-156.24-103.51-290.44-250.79-331.67a376.44 376.44 0 0 1-333.73 551.09c-8.85 0-17.65-0.31-26.47-0.93z" fill="" p-id="8004"></path></svg>`
        console.log('当前为夜晚模式');
    }
    // 切换主题的核心函数
    function toggleTheme() {
        if (body.classList.contains('night-mode')) {
            setDayMode();
        } else {
            setNightMode();
        }
    }

    // 绑定点击事件
    if(toggleBtn){
        toggleBtn.addEventListener('click', toggleTheme);
    }
    initTheme();

    // ------------------- 图片放大弹窗（事件委托） -------------------
    const modal = document.getElementById('imgModal');
    const bigImg = document.getElementById('bigImg');
    // ❗return写在if里面，但是全部都在DOMContentLoaded回调函数内部
    if (!modal || !bigImg) {
        return;
    }

    document.addEventListener('click', function (e) {
        // 只放大markdown容器内的图片
        if (e.target.tagName === 'IMG' && e.target.closest('#markdown-container')) {
            bigImg.src = e.target.src;
            modal.style.display = 'flex';
        }
    });

    // 点击遮罩关闭
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // ESC关闭
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    })
}); // DOMContentLoaded 闭合

// ============================ 响应式导航 ============================
const navContainer = document.getElementById('nav-container');
function openwindow() {
    navContainer.classList.add('show');
}
function closewindow() {
    navContainer.classList.remove('show');
}
// 点击外部关闭导航
document.addEventListener('click', function(e) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile &&
        !navContainer.contains(e.target) &&
        e.target.className !== 'openwindowbtn' &&
        navContainer.classList.contains('show')) {
        closewindow();
    }
});
// 窗口resize
window.addEventListener('resize', function() {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        navContainer.classList.remove('show');
    }
});

// ============================阅读Markdown 文件============================
const mdFiles = [
    'friendlylinks',
    'codenotes',
    'operationnotes',
    'javascriptoperation',
    'vue2operation',
    'Computer_Level1',
    'GistDataEditor',
    '拼多多运营笔记'
];
const DEFAULT_FILE = mdFiles[0]+'.md' || '';

window.onload = function() {
    renderFileList();
    const urlParams = new URLSearchParams(window.location.search);
    const urlFile = urlParams.get('file');
    const targetFile = mdFiles.includes(urlFile) ? urlFile : DEFAULT_FILE;
    loadMarkdownFile(targetFile);
    setActiveFileItem(targetFile);
};

const searchInput = document.getElementById('fileSearchInput');
const searchClearBtn = document.getElementById('fileSearchClear');
let searchKeyword = '';

// 渲染文件列表（带搜索过滤）
function renderFileList() {
    const listContainer = document.getElementById('file-list-container');
    const keyword = searchKeyword.trim().toLowerCase();

    // 有输入就过滤，没输入显示全部
    const filtered = keyword
        ? mdFiles.filter(file => file.toLowerCase().includes(keyword))
        : mdFiles;

    if (filtered.length === 0) {
        listContainer.innerHTML = '<p class="error">未找到相关文档</p>';
        return;
    }

    const fileItems = filtered.map(file =>
        `<div class="file-item" onclick="loadMarkdownFile('${file}')" data-file="${file}">
            <svg t="1769657195785" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10616" width="20" height="20"><path d="M279.272727 558.545455l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM279.272727 698.181818l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM279.272727 139.636364l279.272727 0 0 46.545455-279.272727 0 0-46.545455ZM279.272727 837.818182l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM279.272727 418.909091l465.454545 0 0 46.545455-465.454545 0 0-46.545455ZM861.789091 1024c0 0 22.574545 0 22.574545-22.760727L884.363636 204.8 681.239273 0 162.210909 0C162.210909 0 139.636364 0 139.636364 22.760727L139.636364 1001.192727C139.636364 1024 162.210909 1024 162.210909 1024L861.789091 1024zM186.181818 46.545455l465.454545 0 0 139.636364c0 46.545455 46.545455 46.545455 46.545455 46.545455l139.636364 0 0 744.727273L186.181818 977.454545 186.181818 46.545455ZM279.272727 279.272727l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z" p-id="10617"></path></svg>
            ${file}
        </div>`
    ).join('');

    listContainer.innerHTML = fileItems;
}

// 输入实时过滤
searchInput.addEventListener('input', function () {
    searchKeyword = this.value;
    renderFileList();
});

// 点 x 清空搜索并恢复全部列表
searchClearBtn.addEventListener('click', function () {
    searchInput.value = '';
    searchKeyword = '';
    renderFileList();
    searchInput.focus();
});

// 回车清空输入（可选，习惯用回车收窄焦点可去掉）
searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        this.blur();
    }
});

function setActiveFileItem(filename) {
    const allFileItems = document.querySelectorAll('.file-item');
    allFileItems.forEach(item => {
        item.classList.remove('active');
    });
    const activeItem = document.querySelector(`.file-item[data-file="${filename}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// 解析url参数：拿到不带.md的slug
function getTargetFile() {
    const urlParams = new URLSearchParams(window.location.search);
    const raw = urlParams.get('file') || '';
    // 删掉末尾的.md
    const slug = raw.replace(/\.md$/, '');
    return mdFiles.includes(slug) ? slug : mdFiles[0];
}

// 更新url：只写入slug（不带 .md）
function updateUrlWithFile(slug) {
    const urlParams = new URLSearchParams();
    urlParams.set('file', slug);
    history.pushState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
}

// 加载markdown：接收slug，内部自己拼接 .md
async function loadMarkdownFile(slug) {
    const container = document.getElementById('markdown-container');
    const filename = slug + '.md'; // 这里内部拼接，只给fetch用
    updateUrlWithFile(slug); // ✅ 传给url更新的是纯净slug，不带.md
    setActiveFileItem(slug);
    try {
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

window.onload = function() {
    renderFileList();
    const targetFile = getTargetFile();
    loadMarkdownFile(targetFile);
    setActiveFileItem(targetFile);
};

window.addEventListener('popstate', function() {
    const targetFile = getTargetFile();
    loadMarkdownFile(targetFile);
    setActiveFileItem(targetFile);
});




window.addEventListener('popstate', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlFile = urlParams.get('file');
    const targetFile = mdFiles.includes(urlFile) ? urlFile : DEFAULT_FILE;
    loadMarkdownFile(targetFile);
    setActiveFileItem(targetFile);
});

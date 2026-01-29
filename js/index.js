// 获取导航容器元素
        const navContainer = document.getElementById('nav-container');

        // 打开导航栏
        function openwindow() {
            navContainer.classList.add('show');
        }

        // 关闭导航栏
        function closewindow() {
            navContainer.classList.remove('show');
        }

        // 可选：点击导航栏外部关闭（增强移动端体验）
        document.addEventListener('click', function(e) {
            const isMobile = window.innerWidth <= 768;
            if (isMobile && 
                !navContainer.contains(e.target) && 
                e.target.className !== 'openwindowbtn' &&
                navContainer.classList.contains('show')) {
                closewindow();
            }
        });

        // 可选：监听窗口大小变化，自动调整布局
        window.addEventListener('resize', function() {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) {
                navContainer.classList.remove('show'); // 重置PC端状态
            }
        });
        // 
    // 1. 预定义 md 文件夹下的所有 Markdown 文件（手动维护）
    const mdFiles = [
        'notes.md',
        'work.md'
        // 新增文件时，在这里添加即可
    ];

    // 2. 定义默认加载的文件（解决 filename 未定义问题）
    const DEFAULT_FILE = mdFiles[0] || '';

    // 3. 页面加载时渲染文件列表 + 加载默认文件
    window.onload = function() {
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
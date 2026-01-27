from flask import Flask, render_template_string
import os
import markdown

app = Flask(__name__)

# 你的 md 文件所在的根目录
MD_DIR = "./md_myblog"

# 定义主页模板
INDEX_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <title>md_myblog</title>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
        .post-list { list-style: none; padding: 0; }
        .post-item { margin: 1rem 0; padding: 1rem; border-bottom: 1px solid #eee; }
        .post-title { font-size: 1.2rem; margin: 0; }
        .post-link { color: #24292e; text-decoration: none; }
        .post-link:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>md_myblog</h1>
    <ul class="post-list">
        {% for file in md_files %}
        <li class="post-item">
            <h2 class="post-title">
                <a class="post-link" href="/{{ file }}">{{ file[:-3] }}</a>
            </h2>
        </li>
        {% endfor %}
    </ul>
</body>
</html>
"""

# 定义文章页面模板
POST_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
        .content { line-height: 1.6; }
        .back-link { color: #24292e; text-decoration: none; margin-bottom: 2rem; display: inline-block; }
        .back-link:hover { text-decoration: underline; }
        h1, h2, h3 { color: #24292e; }
        pre { background: #f6f8fa; padding: 1rem; border-radius: 6px; overflow-x: auto; }
        code { background: #f6f8fa; padding: 0.2rem 0.4rem; border-radius: 3px; }
    </style>
</head>
<body>
    <a class="back-link" href="/">← 回到首页</a>
    <div class="content">
        {{ content|safe }}
    </div>
</body>
</html>
"""

@app.route('/')
def index():
    # 获取所有 .md 文件
    md_files = [f for f in os.listdir(MD_DIR) if f.endswith('.md')]
    return render_template_string(INDEX_TEMPLATE, md_files=md_files)

@app.route('/<filename>')
def show_post(filename):
    if not filename.endswith('.md'):
        return "无效的文件类型", 404
    file_path = os.path.join(MD_DIR, filename)
    if not os.path.exists(file_path):
        return "文件不存在", 404
    
    # 读取并渲染 Markdown
    with open(file_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    html_content = markdown.markdown(md_content, extensions=['fenced_code', 'tables'])
    
    return render_template_string(POST_TEMPLATE, title=filename[:-3], content=html_content)

if __name__ == '__main__':
    app.run(debug=True)

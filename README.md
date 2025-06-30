# My Blog - 个人博客网站

基于 **Vue 3 + Vite + Flask + Elasticsearch + Nginx** 构建的全栈博客项目，适用于个人学习、文章管理与发布、接口开发实践。

## 📦 技术栈

- **前端**：Vue 3, Vite, Vue Router
- **后端**：Flask, Python 3.10+
- **搜索引擎**：Elasticsearch (可选)
- **部署环境**：Ubuntu 20.04+, Nginx, systemd
- **开发模式**：前后端分离，Nginx 反向代理至 Vite 开发服务

---

## 🧪 本地开发环境

### 1. 安装依赖项

#### Node.js + Vite 前端

```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev
```

Flask 后端
```bash
# 创建虚拟环境
python3 -m venv venv
source venv/bin/activate

# 安装 Flask 依赖
pip install -r requirements.txt

# 启动 Flask 服务
python app.py
```

🌐 Nginx 配置（开发环境端口代理）
前端开发服务器默认监听 http://localhost:5173，Nginx 可将访问 http://服务器IP/ 自动代理到前端页面。

示例配置（/etc/nginx/sites-available/vue_dev）
```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;

        proxy_cache_bypass $http_upgrade;
    }
}
```
启用配置：
```bash
sudo ln -s /etc/nginx/sites-available/vue_dev /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

⚙️ Vite 配置（开发模式外部可访问）
```js
// vite.config.js
export default defineConfig({
  server: {
    host: '0.0.0.0', // 启动监听所有 IP
    port: 5173,
    strictPort: true
  }
})
```

🔒 防火墙（Ubuntu）
```bash
sudo ufw allow 80        # Nginx HTTP
sudo ufw allow 5173/tcp  # Vue 开发服务器（仅开发阶段需要）
sudo ufw reload
```

✍️ 作者 & 许可
作者：MiaoBo HU
许可证：MIT
欢迎交流与 PR 😊
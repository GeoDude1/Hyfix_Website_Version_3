# Deploy to EC2 (e.g. beta.hyfix.ai)

This app runs as a Node.js server that serves the built React app. Routes like `/home` work because the server sends `index.html` for all paths (SPA).

## 1. On the EC2 instance

**Prerequisites:** Node.js 18+ (or 20). Install if needed:

```bash
# Example on Amazon Linux 2 / Amazon Linux 2023:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

**Deploy and run:**

```bash
# Clone (or pull) the repo
git clone https://github.com/GeoDude1/Hyflix_Website_New_Version.git
cd Hyflix_Website_New_Version

# Install and build (do NOT set GITHUB_PAGES_BASE — we want base "/" for beta.hyfix.ai)
npm ci
npm run build

# Run the server (default port 3000)
npm start
```

- **Port:** Server uses `process.env.PORT || 3000`. To use port 80: `sudo PORT=80 node server.js` (or run on 3000 and put Nginx in front — recommended).

## 2. Keep it running (recommended: PM2)

```bash
npm install -g pm2
pm2 start server.js --name hyfix-beta
pm2 save
pm2 startup   # follow the command it prints so the app restarts on reboot
```

## 3. Point the domain to EC2

- In your DNS (where hyfix.ai is managed), add an **A record**: `beta.hyfix.ai` → your EC2 instance’s **public IP** (or Elastic IP).
- If the app runs on port 3000, put **Nginx** (or another reverse proxy) in front for:
  - HTTPS (e.g. Let’s Encrypt)
  - Proxying to `http://127.0.0.1:3000`

**Minimal Nginx config** (after installing Nginx and certbot):

```nginx
server {
    listen 80;
    server_name beta.hyfix.ai;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then: `sudo certbot --nginx -d beta.hyfix.ai` for HTTPS.

## 4. Updating later

```bash
cd Hyflix_Website_New_Version
git pull
npm ci
npm run build
pm2 restart hyfix-beta
```

---

**Summary:** Build with `npm run build` (no `GITHUB_PAGES_BASE`), run with `npm start` or PM2. Use Nginx + DNS so beta.hyfix.ai (and beta.hyfix.ai/home, etc.) points at that server with HTTPS.

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始自动部署 SHOPLINE Clone...');

function runCommand(command, cwd = process.cwd()) {
  try {
    console.log(`执行: ${command}`);
    const result = execSync(command, { 
      cwd, 
      stdio: 'inherit',
      encoding: 'utf8'
    });
    return result;
  } catch (error) {
    console.error(`命令执行失败: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

async function deploy() {
  try {
    // 检查 wrangler 是否已安装
    try {
      runCommand('wrangler --version');
    } catch {
      console.log('安装 Wrangler CLI...');
      runCommand('npm install -g wrangler');
    }

    // 检查登录状态
    try {
      runCommand('wrangler whoami');
    } catch {
      console.log('❌ 请先登录 Cloudflare:');
      console.log('运行: wrangler login');
      process.exit(1);
    }

    console.log('✅ Wrangler CLI 已准备就绪');

    // 1. 部署后端
    console.log('🔧 部署后端...');
    process.chdir('backend');
    
    // 安装依赖
    runCommand('npm install');
    
    // 创建 D1 数据库
    console.log('📊 创建 D1 数据库...');
    try {
      const dbOutput = runCommand('wrangler d1 create shopline-db');
      console.log('✅ 数据库创建成功');
    } catch {
      console.log('ℹ️ 数据库可能已存在，继续...');
    }

    // 创建 R2 存储桶
    console.log('🪣 创建 R2 存储桶...');
    try {
      runCommand('wrangler r2 bucket create shopline-images');
      console.log('✅ R2 存储桶创建成功');
    } catch {
      console.log('ℹ️ R2 存储桶可能已存在，继续...');
    }

    // 部署 Worker
    runCommand('wrangler deploy');
    console.log('✅ 后端部署完成');

    // 初始化数据库
    console.log('🗄️ 初始化数据库...');
    try {
      runCommand('wrangler d1 execute shopline-db --file=./schema.sql');
      runCommand('wrangler d1 execute shopline-db --file=./seed.sql');
      console.log('✅ 数据库初始化完成');
    } catch (error) {
      console.log('⚠️ 数据库初始化可能失败，请手动执行');
    }

    // 2. 部署前端
    console.log('🎨 部署前端...');
    process.chdir('../frontend');
    
    // 安装依赖
    runCommand('npm install');
    
    // 构建并部署
    runCommand('npm run pages:build');
    runCommand('wrangler pages deploy .next --project-name=shopline-clone-frontend');
    
    console.log('✅ 前端部署完成');

    console.log('');
    console.log('🎉 部署完成！');
    console.log('📱 前端: https://shopline-clone-frontend.pages.dev');
    console.log('🔧 后端: https://shopline-clone-backend.your-subdomain.workers.dev');
    console.log('');
    console.log('📋 请在 Cloudflare Dashboard 中完成以下配置:');
    console.log('1. 为 R2 存储桶设置自定义域名');
    console.log('2. 更新 CORS 配置中的前端域名');
    console.log('3. 配置环境变量');

  } catch (error) {
    console.error('❌ 部署失败:', error.message);
    process.exit(1);
  }
}

deploy();
#!/bin/bash

# 시스템 업데이트
apt-get update -y
apt-get upgrade -y

# 기본 패키지 설치
apt-get install -y curl wget git vim htop unzip build-essential

# Node.js 20 LTS 설치 (fnm 사용)
export HOME=/home/ubuntu
sudo -u ubuntu bash -c 'curl -fsSL https://fnm.vercel.app/install | bash'
sudo -u ubuntu bash -c 'source ~/.bashrc && fnm install 20 && fnm use 20 && fnm default 20'

# Nginx 설치 및 활성화
apt-get install -y nginx
systemctl enable nginx
systemctl start nginx

# Docker 설치
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker ubuntu

# Docker Compose 설치
apt-get install -y docker-compose

# PM2 글로벌 설치 (ubuntu 사용자로)
sudo -u ubuntu bash -c 'source ~/.bashrc && npm install -g pm2'

# SSL 인증서용 Certbot 설치
apt-get install -y certbot python3-certbot-nginx

# 방화벽 포트 열기 (HTTP, HTTPS, 개발용 포트)
iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
iptables -I INPUT 6 -m state --state NEW -p tcp --dport 3000 -j ACCEPT
iptables -I INPUT 6 -m state --state NEW -p tcp --dport 8000 -j ACCEPT

# iptables 규칙 영구 저장
apt-get install -y iptables-persistent
netfilter-persistent save

# 로그 디렉토리 생성
mkdir -p /home/ubuntu/logs
chown ubuntu:ubuntu /home/ubuntu/logs

# Git 전역 설정 (ubuntu 사용자용)
sudo -u ubuntu git config --global init.defaultBranch main

# 개발용 디렉토리 생성
mkdir -p /home/ubuntu/projects
chown ubuntu:ubuntu /home/ubuntu/projects

# 시스템 한계 설정 (Node.js 앱용)
echo "ubuntu soft nofile 65536" >> /etc/security/limits.conf
echo "ubuntu hard nofile 65536" >> /etc/security/limits.conf

# 스왑 파일 생성 (2GB)
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab

# 시간대 설정 (한국 시간)
timedatectl set-timezone Asia/Seoul

# 완료 메시지를 로그에 기록
echo "Cloud-init 스크립트 완료: $(date)" >> /home/ubuntu/init-complete.log
chown ubuntu:ubuntu /home/ubuntu/init-complete.log

# 재부팅 메시지
echo "서버 초기화가 완료되었습니다. SSH로 접속하여 확인하세요." > /home/ubuntu/welcome.txt
chown ubuntu:ubuntu /home/ubuntu/welcome.txt
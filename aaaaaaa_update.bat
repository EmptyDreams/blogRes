@echo off
echo 更新本地列表
call bat/add.bat
call bat/commit.bat
echo 网络同步
call bat/push.bat
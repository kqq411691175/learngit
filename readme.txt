Git is a version control system.
Git is free software.

git config --global user.name kqq
git config --global user.email 411691175@qq.com

cd desktop
mkdir learngit                创建一个目录
cd learngit                   cd到当前目录下
pwd                           用于显示当前目录
git init                      把这个目录变成Git可以管理的仓库
ls -ah                        目录默认是隐藏的，用ls -ah命令就可以看见
git add xxx.txt               把文件提交到暂存区
git commit -m "xxxxxx"        把文件提交到仓库
git status                    掌握仓库当前的状态
git diff readme.txt           查看difference

git log --pretty=oneline      命令显示从最近到最远的提交日志
git reset --hard HEAD^        回退到上一个版本
git reset --hard 3628164      可以指定回到未来的某个版本
cat readme.txt                看看readme.txt的内容
git reflog                    用来记录你的每一次命令
git checkout --xxx.txt        放弃修改文件
git reset HEAD file           可以把暂存区的修改撤销，重新放回工作区
git rm xxx.txt                删除文件

git reset HEAD 然后 git checkout --xxx.txt  //放弃删除恢复文件

git remote add origin git@github.com:kqq411691175/learngit.git//本地关联到Github远程库
git push -u origin master              //把本地库的所有内容推送到远程库上
git push origin master        以后每次本地提交后推送到GitHub

git clone git@github.com:kqq411691175/gitskills.git//远程库创建好后克隆到本地库
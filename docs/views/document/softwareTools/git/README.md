---
isShowComments: false
title: Git
date: 2020-01-08
---

## 初始配置
命令 | 说明
:- |:-
git config --global user.name 'username'   | 设置用户名 
git config --global user.email 'useremail' | 设置邮箱 
git config --global core.editor="应用路径"  | 设置默认文本编辑器名称 
git config --global --replace-all 'username' | 重置用户名
git config --global --replace-all 'useremail' | 重置邮箱

## 基本管理
### 工作区管理
命令 | 说明
:- |:-
git clean | 命令用来从工作目录中删除所有没有跟踪（tracked）过的文件
git clean -n | 是一次clean的演习, 告诉你哪些文件会被删除
git clean -f | 删除当前目录下没有tracked过的文件，不会删除.gitignore指定的文件
git clean -df | 删除当前目录下没有被tracked过的文件和文件夹

### 暂存区管理
命令 | 说明
:- |:-
git add .| 提交所有修改和新增的文件 
git add -u| 只提交修改文件不提交新文件 
git checkout .| 放弃没有提交的所有修改 
git checkout hd.js| 放弃指定文件的修改 
git ls-files -s| 查看暂存区文件列表 
git cat-file -p 6e9a94| 查看暂存区文件内容 

### 版本库管理
使用reset恢复到历史提交点，重置暂存区与工作目录的内容。
命令 | 说明
:- |:-
git reset --hard | 清空工作区和暂存区的改动 
git reset --hard HEAD^^^ | 恢复前三个版本 
git reset --soft | 保留工作区的内容，把文件差异放进暂存区 
git reset --hard b7b73147ca8d6fc20e451d7b36 | 恢复到指定提交版本（先通过 git log 查看版本号）

### 查看日志
命令 | 说明
:- |:-
git log | 查看日志
git log -p -2 | 查看最近2次提交日志并显示文件差异
git log --name-only | 显示已修改的文件清单 
git log --name-status | 显示新增、修改、删除的文件清单 
git log --oneline | 一行显示并只显示SHA-1的前几个字符 

## 分支管理
### 新建分支
命令 | 说明
:- |:-
git branch ask|新建ask分支
git checkout -b ask | 新建ask分支并切换到ask分支

### 查看分支
命令 | 说明
:- |:-
git branch | 查看本地分支
git branch -r | 查看远程分支
git branch -a | 查看本地和远程的所有分支
git branch -v | 查看本地各个分支目前最新的提交
git branch -vv | 查看本地分支和远程分支的映射关系
git branch -r -v | 查看远程各个分支目前最新的提交
git branch --no-merged | 查看未合并的分支(切换到master)
git branch --merged | 查看已经合并的分支(切换到master) 


### 切换分支
命令 | 说明
:- |:-
git checkout dev | 切换到dev分支

### 合并分支
命令 | 说明
:- |:-
git merge ask | 在master分支上合并ask分支

### 删除分支
命令 | 说明
:- |:-
git push origin --delete dev| 删除远程分支dev
git branch -d dev | 删除本地分支dev（在主分支中）
git branch -D dev | 删除没有合并的分支

### 同步远程分支
命令 | 说明
:- |:-
git fetch | 将本地分支与远程保持同步
git fetch --all | 将本地所有分支与远程保持同步
git checkout -b <本地分支> origin/<远程分支> | 拉取远程分支并同时创建对应的本地分支
git branch -a | 查看本地和远程的所有分支

## 远程仓库
### SSH
生成 `SSH`
- 查看是否存在 ssh 文件：ls -al ~/.ssh
- 执行生成命令 ：ssh-keygen
- 查看一下是否生成：cd ~/.ssh
- 查看公钥 ：cat ~/.ssh/id_rsa.pub
- 复制 ssh 公钥到代码管理平台  

本地可以存在多个 `SSH`
- 继续执行生成命令 ：ssh-keygen  
- 系统会提示输入文件名，不输入会覆盖第一次生成的 `SSH`  

### 远程关联
命令 | 说明
:- |:-
git remote -v | 查看远程仓库
git remote add origin [别名] 仓库地址 | 关联远程仓库
git remote rm origin [别名] | 删除远程仓库关联
> 通过 clone 克隆的仓库，本地与远程已经自动关联

### push
1. 将当前分支推送到 `origin` 主机的对应分支(如果当前分支只有一个追踪分支 ，可省略主机名)
~~~ sh
git push origin
~~~
2. 使用 `-u` 选项指定一个默认主机 ,这样以后就可以不加任何参数直播使用 git push。
~~~ sh
git push -u origin master
~~~
3. 本地 `master` 分支关联远程分支并推送,一般第一次关联远程分支提交需要执行该命令
~~~ sh
git push --set-upstream origin master
~~~
4. 强制推送到 `origin` 的 `ask` 分支
~~~ sh
git push -f origin dev
~~~
5. 将 `ask` 分支推送到远程
~~~ sh
git push origin ask
~~~
### pull
1. 拉取origin主机的ask分支与本地的master分支合并
~~~ sh
git pull origin ask:ask
~~~
2. 拉取origin主机的ask分支与当前分支合并
~~~ sh
git pull origin ask
~~~
3. 如果远程分支与当前本地分支同名直接执行
~~~ sh
git pull
~~~
### 多库提交
有时候我们希望项目可以同时在 gitee 和 github 上同时管理，这时候可以
~~~ sh
git remote add origin <github仓库地址>
git remote add origin <gitee仓库地址>
~~~
添加两个关联，执行 `git push` 后就可以同时提交两个平台
## 高效率配置
### .gitconfig
git 全局配置都在 `.gitconfig` 文件中，例如用户名、别名等,一般可以打开方式：  
- 通过命令 `git config --global --edit`  
- win10 系统下 `C:\Users\Administrator` 找到 `.gitconfig` 文件

### .gitignore
`.gitignore` 文件中用于定义忽略提交的文件
~~~
/node_modules
/dist
~~~

### 配置 alias
有些命令使用非常频繁，这时候就可以全局定义别名，在 `.gitconfig` 文件中配置
~~~ sh
[alias]
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
  lggra = log --oneline --graph --pretty
  s = status
  cm = commit -m
  a = add .
  b = branch
~~~

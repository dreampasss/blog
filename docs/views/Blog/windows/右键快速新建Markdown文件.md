---
title: 桌面右键快速新建Markdown文件
date: 2020-08-05
categories:
 - windows
---

经常使用typora来写笔记之类的，桌面不能快速的新建 `md` 文件，以至于每次都要更改记事本文件类型，感觉十分的麻烦。  

新建一个 `txt` 文件，写入一下内容，然后改为 `reg` 文件，双击运行即可实现右击桌面新建 `md` 文件

``` shell
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\.md]
@="TyporaMarkdownFile"
"PerceivedType"="text"
"Content Type"="text/plain"

[HKEY_CLASSES_ROOT\.md\ShellNew]
"NullFile"=""
```


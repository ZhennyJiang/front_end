## 阿里巴巴图标库的使用（包括在原有字体图标的基础上新增字体图标）

### 1. 添加字体图标

首先进入阿里巴巴图标库官网，选择想要的图标，将鼠标移动至图标上方则会出现以下情况。
![](11.png)

这时我们点击购物车这个图标将想要的图标添加至购物车。这里我选择了两个。选择好图标之后，如下图，下载代码。

![](12.png)

随后将下载的压缩包解压，放到指定的文件夹里存放（这里放在哪里都没关系，因为后续引用的时候可以修改地址，但这里我放到了我要演示的 demo 的根目录下）

![](13.png)

解压后是这样子，为了好看，我把这个文件夹直接改名为 font，如下下张图

![](14.png)

改名为 font

![](15.png)

进去 font 文件夹我们可以看到很多文件，其中 demo_index.html 文件里有官方的使用步骤。（不要直接看我演示，先看官方的文档），官方有三种使用字体图标的方法，在这里我只演示 Unicode 的方法。

![](16.png)

在官方文档中，开头我们看见的这个图标，最底下这个，红色框框圈住的就是我们在标签使用的时候需要用到的对应的命名。

![](19.jpg)

回到刚才的文件夹中，打开 iconfont.css 这个文件我们可以看到许多代码，其中开头的这两段是我们需要用到的：

![](17.png)

将这两段代码复制到我们编辑器中，如下图。注意一定要修改路径，否则无法显示
![](18.jpg)

然后在我们复制古来的代码的第二段代码中，即 .iconfont 类，是我们在标签使用字体图标时需要引用的类，如图：

![](18.png)

实际上再.iconfont 代码块中最重要的是第一行代码： font-family:"iconfont",有了这一行代码我们可以不需要复制.iconfont 代码块，可以另外自定义一个类，再加上 font-family:"iconfont" 就可以引用我们的字体图标了

首先我们知道 iconfont 字体图标代码如 \&#xe601;

代码分解: 字体图标由 &# 和 x 以及 四个数字\字母 组成;

工作原理: 其中&#表示这是字符实体，x 表示这是十六进制，刚好伪元素的 content 接受的也是十六进制的 Unicode 编码。

在 span 标签中的 &#xe8d0 就是我们刚刚在官网文档中看到的图标对应的命名。我们假设 e8d0 是其图标的名，&#x 是图标的姓。最后我们再回到 icofont.css 中的代码中来

![](19.png)

有没有发现 content 里面的 e8d0 就是我们这个字体图标的名字呢。

### 2. 在原有的图标上再添加字体图标

首先我们需要把字体图标下载到本地，步骤跟上一次的一样。并且改名为 font2
![](21.jpg)

点开 font2 文件夹，并且打开我们的 iconfont.css

![](22.jpg)
注意看红色框框 ① 中的小框框，我是这里我给其路径改了名字，把原来的 iconfont 改为了 iconfont1，这里的名字可以任意改，但最好不要彻底“改头换面”。

改完名字后，将 ①、② 的代码复制到我们一开始的 font 文件中的 iconfont.css 文件中：
![](23.jpg)

然后，我们再将这段@font-face 代码复制到刚刚的编辑器中（这时编辑器中就有两段@font-face 代码了！）

然后我们要用其中某个字体图标的时候，可以再打开刚刚的 css 文件看他们的名字是什么
，如在上图中最后一段 icon 的代码中可以看出，该图标的名字是 e8d1，此时我们复制到编辑器中：

![](24.jpg)

然后就大功告成啦！

### 3. 伪类元素字体图标

![](25.jpg)

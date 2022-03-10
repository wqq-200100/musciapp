创建项目：vue create app
设置项目格式：.editorconfig 文件
格式化代码：yarn add prettier -D 
    1.配置.prettierrc 文件
      {
      "useTabs": false, 使用 tab 缩进还是空格缩进，选择 false；
      "tabWidth": 2, tab 是空格的情况下，是几个空格，选择 2 个；
      "printWidth": 100, 当行字符的长度，推荐 80，也有人喜欢 100 或者 120；
      "singleQuote": true, 使用单引号还是双引号，选择 true，使用单引号；
      "trailingComma": "none", 在多行输入的尾逗号是否添加，设置为 `none`；
      "bracketSpacing": true,
      "semi": false 语句末尾是否要加分号，默认值 true，选择 false 表示不加；
      } 
    2.配置.prettierignore 忽略文件
      在package.json配置"prettier": "prettier --write ."

创建vue.config.js配置文件（修改webpack配置）
配置路由router
管理数据store (vuex）
安装ui库 (Ant Design Vue)

文件夹说明：
    components:存放公共的代码
      1.common:还可以在其他项目使用的代码 (公共的)
      2.content:当前项目相关的业务代码，只针对当前项目
    network:网络相关的封装
    common:存放公共的js文件
      1.const:公共的常量、公共的工具
    assets：存放css、img
      1.normalize:第三方的css
      2.base:自己的css

配置别名（vue.config.js）


先写TabBar
具名插槽使用要在template中v-slot,语法糖#

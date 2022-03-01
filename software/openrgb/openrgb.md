# OpenRGB QMK 使用指南

  OpenRGB是一款开源的灯光控制软件,支持多厂商多设备.
  
  项目开源地址:https://gitlab.com/CalcProgrammer1/OpenRGB
  
  该开源软件使用方法丰富,可自行探索或在开源地址Wiki进行了解.
  
## 目录

 * 下载OpenRGB
 * 添加OpenRGB插件
 * 添加QMK键盘
 * 使用OpenRGB设置灯效
 * 使用Effects插件设置灯效
 * 使用Visual Map插件自定义灯珠位置
 
## 下载OpenRGB

  在software/openrgb文件夹中下载预制好的OpenRGB软件(win10 64位),其中OpenRGB Windows 64-bit.zip
  
  是未打包的软件,而OpenRGB_pack.exe是打包好的软件,选其中之一下载即可.
  
  下载后建议首次以管理员身份运行.
  
  首次开启后,建议在设置中勾选如下选项以方便软件后台运行.控制灯效时,软件需要后台运行.
   
  点击Settings->General Settings
   
  勾选Minimize On Close.勾选后关闭软件请在系统托盘处关闭.
   
  勾选Load Geometry,Save Geometry On Close,Run zone checks on rescan.
   
  勾选Start At Login可以对软件启动进行设置.
  
## 添加OpenRGB插件

  在software/openrgb文件夹中下载压缩好的OpenRGB插件,然后对其解压,其中OpenRGBEffectsPlugin.dll是
  
  灯效插件,包含音乐律动等多种灯效,OpenRGBVisualMapPlugin.dll是一个对每个灯位置自定义的插件,可包含
  
  同个键盘不同区域,多个键盘,已至多个不同OpenRGB支持的设备处于同一张MAP中,实现联动效果.请按需求添加
  
  自己需要的插件.
  
  添加插件步骤如下所示:
  
  1.打开OpenRGB
  
  2.点击Settings->General Settings->Open Settings Folder
  
  3.复制所解压的插件至该文件夹的plugins文件夹中
  
  4.重新启动OpenRGB观察插件是否生效
  
 ## 添加QMK键盘
 
  本仓库预制的OpenRGB软件自带部分键盘的支持,若插入键盘点击OpenRGB下方Rescan Devices能够检测连接到键
  
  盘,则不需要自行添加。
  
  反之,添加QMK键盘支持的步骤如下所示:  
  
  1.打开OpenRGB
  
  2.点击Settings->OpenRGB QMK Protocol->Add
  
  3.填写相应键盘的名字,VID,PID
  
  4.点击Save后点击OpenRGB下方Rescan Devices检测连接键盘(若无法连接可尝试重新启动OpenRGB)
 
 ## 使用OpenRGB设置灯效
 
  在Device页面Mode选项可以设置键盘的板载灯效,右边的色轮等可以设置颜色,但这些设置不会报存,需要保存请点
  
  击Save To Device.
 
  使用OpenRGB的设置LED灯光效果或者使用OpenRGB插件Effects的灯效请将模式设置为Direct,然后点击OpenRGB
  
  下方Toggle LED View
  
  即可看到自动生成的可视化LED矩阵,通过鼠标点击或者框选可以选择单个或者多个LED对其颜色进行设置.
  
  建议灯光亮度不要太高避免问题.
  
## 使用Effects插件设置灯效

  添加Effects插件后,即可在OpenRGB顶部看到Effects栏,点击进Effect插件页面,左侧为灯效栏,中间为灯效的具
  
  体内容,右侧为可以选择的设备栏.
  
  在灯效栏下拉选择框即可看到许多灯效,选择需要的灯效添加.以音乐律动Audio Visualizer灯效为例,添加后点击
  
  该灯效即可在中间设置相应参数,
  
  在右侧选择设备后点击Start即可开始.
  
  使用或设置变更后记得保存,点击下方Save as profile或中间灯效设置栏右上方Save to file.
  
  可以开启不同灯效控制一把键盘不同领域实现不同灯不同灯效,也可以一个灯效控制多个设备实现多设备联动.
  
  建议不要使用大量白光已经占用系统资源多的灯效如Ambient,GIFPlayer等,灯效玩法多样,需自行探索.
 
## 使用Visual Map插件自定义灯珠位置
  添加Visual Map插件后,即可在OpenRGB顶部看到Visual Map栏,点击New Map新建Map,在左侧添加需要添加的设备,
  
  右侧对其自定义等.设置完后记得注册控制器Controller并保存,即可在Effects插件处看到该设备,请不要同时开启
  
  一个设备及包含该设备的Map的灯效.
  
  该插件玩法多样,需要自行探索.
  

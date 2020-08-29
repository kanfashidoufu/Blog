---
title: React-Learning
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - ES6
 - React
date: 2019-02-25 14:45:30
tags:
- 学习笔记
- ES6
- React
---

# 开发环境搭建
* 安装LTS版nodejs 已安装可以忽略
* 安装create-react-app快速创建一个react应用或直接使用`npx create-react-app my-app`
* `cd my-app`
   `npm start`

# 什么是组件？
组件可以理解为网页的一部分
一个html标签也可以是一个组件

**React中一大写字母开头的一般都表示为组件**
``` jsx
import React from 'react';
```
``` jsx
import ReactDOM from 'react-dom';
```

React这个库的意义在于将代码识别为React语法的代码
ReactDom的意义在于用来将React组件渲染到页面中的真实dom节点上

## 如何定义一个React组件
首先需要在组件的js中引入React
``` jsx
import React, { Component } from 'react';
```

其次 定义一个组件实际上是一个类 继承于React.Component
``` jsx
class App extends Component {

}
```

组件中必须要有一个render函数 负责组件要显示的内容

``` jsx
render（）{
	return {
	}
}
```

最后把组件对外暴露
``` jsx
export default App;
```

## 简单的JSX语法
JSX语法可以让我们在编写一个React组件的时候 可以在函数中直接使用html标签
``` jsx
render() {
    return (
      <div className="App">
        hello, i am Kevin
      </div>
    );
  }
  ```
在JSX中在标签语法中还可以使用js的表达式
``` jsx
render() {
    return (
      <div className="App">
	  { 1 + 2 }
        hello, i am Kevin
      </div>
    );
  }
```
## 事件绑定
在React中的JSX中绑定React中的注册事件
``` jsx
handleBtnClick() {
    alert('click')
  }

  render() {
    return (
      <div className="TodoList">
        <div>
          <input />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
      </div>
    );
  }
```
## 数据处理
### 初始化state保存数据
``` jsx
constructor(props){
    super(props);
    this.state = {
      
    }
  }
```

### 数据更新
调用React提供的setState（）方法 实现数据更新 进而实现视图更新
``` jsx
this.setState({
      list: {...this.state.list, 'hello world'}
    })
```
## 组件通信

### 父=>子组件通信
父组件通过属性的方式传递参数到子组件
子组件中通过`this.props.属性值`的方式获得父组件传递参数
``` jsx
return <TodoItem content={item} />
```
``` jsx
class TodoItem extends Component {
	render() {
		return (
			<div>{this.props.content}</div>
		)
	}
}
```
### 子=>父组件通信
在React中子组件如果想和父组件通信，要调用父组件传递过来的方法
``` jsx
 return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />
 ```
 这里父组件传递一个`delete`属性，实际上是一个`handleDelete`函数
 
 ``` jsx
 handleDelete() {
		this.props.delete(this.props.index);
	}

	render() {
		return (
			<div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
		)
	}
```
在子组件中绑定一个click事件 将传递过来的方法在click事件中调用将`index`传入， 从而实现了子组件向父组件传递数据

## 样式问题
在JSX语法中无法直接使用style属性添加样式

1. 可以使用js表达式的方式添加一个样式对象
``` jsx
 <button style={{background: 'red'}} onClick={this.handleBtnClick}>add</button>
 ```
2. 可以使用className属性定义原生的Class样式类

 ``` jsx
 <button className='red-btn' onClick={this.handleBtnClick}>add</button>
 ```
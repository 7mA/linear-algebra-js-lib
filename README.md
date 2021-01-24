# liner-algebra-lib-js
Author: Kaku([@7mA](https://github.com/7mA))

## 概要
记述一些复用性比较高的与线性代数相关的JavaScript类与函数。

## Classes

---

### Vec
向量类。

---

#### Constructors

**constructor**

> new Vec(x: *number*, y: *number*): *Vec*

**Parameters**
- **x:** *number*
指定向量的横坐标。
- **y:** *number*
指定向量的纵坐标。

**Returns** *Vec*

---

#### Properties

**x:** *number*
向量的横坐标。

**y:** *number*
向量的纵坐标。

---

#### Methods

**add**

> add(b: *Vec*): *Vec*

**Parameters**
- **b:** *Vec*
向量加运算对象。

计算两个向量的和。
**Returns** *Vec*


**sub**

> sub(b: *Vec*): *Vec*

**Parameters**
- **b:** *Vec*
向量减运算对象。

计算两个向量的差。
**Returns** *Vec*


**copy**

> copy(): *Vec*

复制当前向量。
**Returns** *Vec*


**multi**

> multi(s: number): *Vec*

**Parameters**
- **b:** *Vec*
数与向量的积的运算对象。

返回数与向量的乘积。
**Returns** *Vec*


**mag**

> mag(): *number*

返回向量的大小。
**Returns** *number*

---

### Ray
线段类。

#### Constructors

> new Ray(pos: *number*, way: *number*): *Ray*

**Parameters**
- **pos:** *Vec*
指定线段起点的位置向量。
- **way:** *Vec*
指定线段的方向向量。

**Returns** *Vec*

#### Properties

**pos**
pos: *number*
线段起点的位置向量。

**y**
y: *number*
线段的方向向量。

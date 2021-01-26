# liner-algebra-js-lib (latest version: v1.2.0)
Author: Kaku ([@7mA](https://github.com/7mA))

## 概要
记述一些复用性比较高的与线性代数相关的JavaScript类与函数。

## 类列表

- **Vec**: 向量类
- **Ray**: 线段类
- **ViewPoint**: 视点类

## API文档
[https://7ma.github.io/linear-algebra-js-lib/](https://7ma.github.io/linear-algebra-js-lib/)

## 使用方法
在HTML中添加下列语句：

```html
<script src="https://cdn.jsdelivr.net/npm/linear-algebra-js-lib@1.2.0/src/linear-algebra-lib.min.js"></script>
```

## 源代码
[https://github.com/7mA/linear-algebra-js-lib](https://github.com/7mA/linear-algebra-js-lib)

## 更新履历

### v1.2.0 (2021/01/26)
- Vec类
  - 追加[angle取值器](https://7ma.github.io/linear-algebra-js-lib//Vec.html#angle)
  - 更改[move方法](https://7ma.github.io/linear-algebra-js-lib/Vec.html#move)实现逻辑（接口规格无变化）
  - 追加[getUnitVectorFromAngle静态方法](https://7ma.github.io/linear-algebra-js-lib/Vec.html#.getUnitVectorFromAngle)
  - 追加[unitize方法](https://7ma.github.io/linear-algebra-js-lib/Vec.html#unitize)
  - 追加[dotProduct方法](https://7ma.github.io/linear-algebra-js-lib/Vec.html#dotProduct)
- ViewPoint类
  - 追加[viewLineUnitVector取值器](https://7ma.github.io/linear-algebra-js-lib/ViewPoint.html#viewLineUnitVector)

### v1.1.0 (2021/01/25)
- 追加[Vec类move方法](https://7ma.github.io/linear-algebra-js-lib/Vec.html#move)

### v1.0.0 (2021/01/24)
- 发布[库](https://www.npmjs.com/package/linear-algebra-js-lib)

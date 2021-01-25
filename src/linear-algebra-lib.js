/**
 * 向量类
 * @prop {number} x 向量横坐标
 * @prop {number} y 向量纵坐标
 */
class Vec {

  /**
   * 构建向量对象
   * @param {number} x 向量横坐标
   * @param {number} y 向量纵坐标
   * @return {Vec} 向量对象
   */
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  /**
   * 计算两个向量的和
   * @param {Vec} b 向量和运算对象
   * @return {Vec} 向量的和
   */
  add(b){
    let a = this;
    return new Vec(a.x + b.x, a.y + b.y);
  }

  /**
   * 计算两个向量的差
   * @param {Vec} b 向量差运算对象
   * @return {Vec} 向量的差
   */
  sub(b){
    let a = this;
    return new Vec(a.x - b.x, a.y - b.y);
  }

  /**
   * 获取向量的副本
   * @return {Vec} 向量副本
   */
  copy(){
    return new Vec(this.x, this.y);
  }

  /**
   * 计算数与向量的积
   * @param {number} s 数与向量的积运算对象
   * @return {Vec} 数与向量的积
   */
  multi(s){
    return new Vec(s * this.x, s * this.y);
  }

  /**
   * 获取向量的大小
   * @return {number} 向量大小
   */
  mag(){
    return sqrt(this.x ** 2 + this.y ** 2);
  }

  /**
   * 移动向量
   * @param {number} distance 移动距离
   * @param {number} angle 移动角度
   * @return {Vec} 移动以后的向量
   */
   move(distance, angle){
     return this.add(new Vec(cos(angle), sin(angle)).multi(distance));
   }
}

/**
 * 线段类
 * @prop {Vec} pos 线段起点的位置向量
 * @prop {Vec} way 线段的方向向量
 */
class Ray {

  /**
   * 构建线段对象
   * @param {Vec} pos 线段起点的位置向量
   * @param {Vec} way 线段的方向向量
   * @return {Ray} 线段对象
   */
   constructor(pos, way){
     this.pos = pos;
     this.way = way;
   }

   /**
    * 通过两个点的位置向量构建线段
    * @param {Vec} begin 线段起点的位置向量
    * @param {Vec} end 线段终点的位置向量
    * @return {Ray} 构建成的线段对象
    */
   static getRayFromPoints(begin, end){
     return new Ray(begin, end.sub(begin));
   }

   /**
    * 线段起点的位置向量
    * @type {Vec}
    * @readonly
    */
   get begin(){
     return this.pos;
   }

   /**
    * 线段终点的位置向量
    * @type {Vec}
    * @readonly
    */
   get end(){
     return this.pos.add(this.way);
   }

   /**
    * 获取两个线段焦点的位置向量
    * @param {Ray} r2 相交运算对象线段
    * @return {Vec | null} 两个线段焦点的位置向量，不相交的场合为null
    */
   intersection(r2){
     let r1 = this;

     // 近似化处理，以防除数过小导致t1、t2越界
     if(abs(r1.way.x) < 0.01) r1.way.x = 0.01;
     if(abs(r2.way.x) < 0.01) r2.way.x = 0.01;

     let t1 = r1.way.y / r1.way.x;
     let t2 = r2.way.y / r2.way.x;
     let x1 = r1.pos.x;
     let x2 = r2.pos.x;
     let y1 = r1.pos.y;
     let y2 = r2.pos.y;
     let sx = (t1 * x1 - t2 * x2 - y1 + y2) / (t1 - t2);
     let sy = t1 * (sx - x1) + y1;
     if(
       sx > min(r1.begin.x, r1.end.x)
       && sx < max(r1.begin.x, r1.end.x)
       && sx > min(r2.begin.x, r2.end.x)
       && sx < max(r2.begin.x, r2.end.x)
     ){
       return new Vec(sx, sy);
     } else{
       return null;
     }
   }

}

/**
 * 视点类
 * @prop {Vec} pos 视点位置向量
 * @prop {number} angle 视线方向角度（弧度制）
 */
class ViewPoint {

  /**
   * 构建视点对象
   * @param {Vec} pos 视点位置向量
   * @param {number} angle 视线方向角度（弧度制）
   * @return {ViewPoint} 视点对象
   */
  constructor(pos, angle){
    this.pos = pos;
    this.angle = angle;
  }

}

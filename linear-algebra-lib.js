class Vec {

  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Vec} b
   */
  add(b){
    let a = this;
    return new Vec(a.x + b.x, a.y + b.y);
  }

  /**
   * @param {Vec} b
   */
  sub(b){
    let a = this;
    return new Vec(a.x - b.x, a.y - b.y);
  }

  copy(){
    return new Vec(this.x, this.y);
  }

  /**
   * @param {number} s
   */
  multi(s){
    return new Vec(s * this.x, s * this.y);
  }

  mag(){
    return sqrt(this.x ** 2 + this.y ** 2);
  }

}

class Ray {

  /**
   * @param {Vec} pos 起点向量
   * @param {Vec} way 移动向量
   */
   constructor(pos, way){
     this.pos = pos;
     this.way = way;
   }

   /**
    * @param {Vec} begin
    * @param {Vec} end
    */
   static getRayFromPoints(begin, end){
     return new Ray(begin, end.sub(begin));
   }

   get begin(){
     return this.pos;
   }

   get end(){
     return this.pos.add(this.way);
   }

   /**
    * @param {Ray} r2
    */
   intersection(r2){
     let r1 = this;
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

class PointView {

  /**
   * @param {Vec} pos 视点位置向量
   * @param {number} angle 视线方向角度
   */
  constructor(pos, angle){
    this.pos = pos;
    this.angle = angle;
  }

}

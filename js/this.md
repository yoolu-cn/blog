# 考察 this 和 arguments

- this -> 函数调用者
- arguments -> 函数实际传递参数

```javascript
var length = 1;

funciton fn() {
    console.log(this.length);
}

var obj = {
    length: 100,
    action: function(callback) {
        // 输出1
        callback();
        // 输出2
        arguments[0]();
        // 输出3
        var foo = arguments[0];
        foo();
        // 输出4
        this.foo2 = arguments[0];
        this.foo2();
    }
};

var arr1 = [1, 2, 3, 4];
obj.action(fn, ...arr1);

```

### 结果

``` javascript
    // 输出1
    // this -> window  console.log => 1
    // 输出2
    // this -> arguments console.log => 5
    // 输出3
    // this -> window console.log => 1
    // 输出4
    // this -> obj console.log => 100
```
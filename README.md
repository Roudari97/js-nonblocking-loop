
# Nonblocking JavaScript loop (better name tbd)

Based on [jfriend00](https://stackoverflow.com/questions/10344498/best-way-to-iterate-over-an-array-without-blocking-the-ui) answer on Stackoverflow regarding nonblocking array iteration. Edited to support promises.

## arrayLoop(array, callback)

Iterates array and calls callback function on every iteration
Returns a void Promise

### How to use

Call the function like this to access callback parameters:

```js
asyncArray(array, (params)=>{
    const {index,element} = params;
    //do something with index and element
}).then( ()=>{
    //do something after loop is complete
})
```

## Todo

Have Promise to return something<br>
Handle rejection<br>
Test code (I tested on Express and seems to work but need to test how practical this is in, for example, React. Also don't know if iteration is in correct order, but so far seems like it)<br>


&copy; Roudari 2022 - (CC BY 4.0)

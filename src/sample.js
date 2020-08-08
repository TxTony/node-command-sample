module.exports = {
    /**
    * Say hello :) .
    */
    sayHello: ()=>{
        console.log("Hello world");
    },
    /**
    * Print current time obviously .
    */
    whatTimeIsItPlease: ()=>{
        console.log('The current time is: ', new Date().toLocaleTimeString());
    },
    /**
    * process command hello.
    * @param Object argv
    */
    run: (argv)=>{
        module.exports.sayHello();
        if (argv.time) {
            module.exports.whatTimeIsItPlease();
        }
    }

}

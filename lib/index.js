/**
 * Created by amertis on 18/7/2014.
 */

function MyReporter(runner) {
    var passes = 0;
    var failures = 0;

    runner.on('pass', function(test){
        debugger
        passes++;
        console.log('pass: %s', test.fullTitle());
    });

    runner.on('fail', function(test, err){
        debugger
        failures++;
        console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
    });

    runner.on('end', function(){
        debugger
        console.log('end: %d/%d', passes, passes + failures);
        process.exit(failures);
    });
}
module.exports = MyReporter;

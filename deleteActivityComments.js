// This script allows users to delete all of their comments from their activity log.
// Navigate to https://www.facebook.com/[YOUR FACEBOOK USERNAME]/allactivity?privacy_source=activity_log&log_filter=cluster_116

var connectBtns = document.getElementsByClassName('_42ft _42fu _4-s1 _2agf _p _42gx');
console.log("Comments: " + connectBtns.length);
for(var i = 0; i < connectBtns.length; i++) {
    connectBtns[i].click()
    console.log(connectBtns[i]);
    var deletes = document.getElementsByClassName('_54nc');
    console.log("Deletes: " + deletes.length);
    for(var j = 0; j < deletes.length-10; j++) {
    	deletes[j].click();
    	console.log(deletes[j]);
    }
}
void(0);
//Same program, in intervals (currently set to 8000=8 seconds)
setInterval(function() {
    var connectBtns = document.getElementsByClassName('_42ft _42fu _4-s1 _2agf _p _42gx');
    console.log("Comments: " + connectBtns.length);
    for(var i = 0; i < connectBtns.length; i++) {
        connectBtns[i].click()
        console.log(connectBtns[i]);
        var deletes = document.getElementsByClassName('_54nc');
        console.log("Deletes: " + deletes.length);
        for(var j = 0; j < deletes.length-10; j++) {
        	deletes[j].click();
        	console.log(deletes[j]);
        }
    }
}, 1000);
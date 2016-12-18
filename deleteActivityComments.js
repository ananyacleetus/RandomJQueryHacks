// This script allows users to delete all of their comments from their activity log.
// Navigate to https://www.facebook.com/[YOUR FACEBOOK USERNAME]/allactivity?privacy_source=activity_log&log_filter=cluster_116
setInterval(function() {
    var connectBtns = document.getElementsByClassName('_42ft _42fu _4-s1 _2agf _p _42gx');
    console.log("Comments: " + connectBtns.length);
    for(var i = 0; i < connectBtns.length; i++) {
        connectBtns[i].click()
        var deletes = document.getElementsByClassName('_54nc');
        deletes[deletes.length-1].click();
    }
}, 2000);
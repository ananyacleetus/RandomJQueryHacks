//Click every like button found on current page
for( i = 1;i<document.getElementsByClassName("UFILikeLink").length;i++) {
document.getElementsByClassName("UFILikeLink")[i].click();
}
void(0);
//Same program, in intervals (currently set to 8000=8 seconds)
setInterval(function() {
    var connectBtns = document.getElementsByClassName('UFILikeLink');
    for(var i =0; i < connectBtns.length; i++) {
        connectBtns[i].click()
    }
}, 8000);
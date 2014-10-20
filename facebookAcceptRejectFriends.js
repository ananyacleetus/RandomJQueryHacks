//URL: https://www.facebook.com/friends/requests/
//Accept all friend requests
for( i = 1;i<document.getElementsByName("actions[accept]").length;i++) {
    document.getElementsByName("actions[accept]")[i].click();
    }
    void(0);
//Reject all friend requests
for( i = 1;i<document.getElementsByName("actions[hide]").length;i++) {
    document.getElementsByName("actions[hide]")[i].click();
    }
    void(0);
multipleClick_clickTime = null; multipleClick_target = null; function preventMultipleClick(id) { sameTarget = false; if(id==multipleClick_target) { sameTarget = true; } multipleClick_target = id; fastClick = false; var currentClickTime = new Date(); if (currentClickTime - multipleClick_clickTime < 500) {fastClick = true;} multipleClick_clickTime = currentClickTime; return (sameTarget && fastClick); }
var current_item = null; var current_timeout = null;
function display(id){
    new_menu = $( id );
    if (current_item == null) {
        current_item = new_menu;
        new_menu.fadeIn();
    } else if (current_item == new_menu) {
        return;
    } else {
        current_item.stop( true, true ).fadeOut(complete=function() {
            current_item = new_menu;
            new_menu.fadeIn();
        });
    }
}

function stateChanged(state, behaviorName) {
    console.log("State changed:", state);
    if (state == "Ready") display(".main_menu");
    else if (state == "BehaviorRunning") {
        display("#back_menu");
        current_running_behavior=behaviorName;
    }
    else if (state == "Sleeping")   display("#onsleep_menu");
    else display("#loading_menu");
}

var current_running_behavior = "";
function runBehavior(behavior) {
    return new Promise(function(resolve, reject) {
        session.service("ALBehaviorManager").then(
            function(bm) {
                bm.runBehavior(behavior).then(
                    function() { console.log("Behavior run"); resolve(); },
                    function(error) { console.error(error); reject(error); }
                );
            },
            function(error) { console.log(error); reject(error); }
        );
    });
}
function stopBehavior(behavior) {
    return new Promise(function(resolve, reject) {
        if(behavior) {
            session.service("ALBehaviorManager").then(
                function(bm) {
                    console.log("Stopping behavior: ", behavior);
                    bm.stopBehavior(behavior).then(
                        function() { current_running_behavior = ""; console.log("Behavior stopped"); resolve(); },
                        function(error) { console.log(error); reject(error); }
                    );
                },
                function(error) { console.log(error); reject(error); }
            );
        } else {
            session.service("DemoLauncher").then(
                function(DemoLauncher) {
                    DemoLauncher.get_running_behavior().then(
                        function(behavior) {
                            if (behavior) {
                                console.log("DemoLauncher is running behavior: ", behavior);
                                stopBehavior(behavior);
                            } else {
                                console.log("DemoLauncher is not running any behavior...");
                                reject(error);
                            }
                        },
                        function(error) { console.log(error); reject(error); }
                    );
                },
                function(error) { console.log(error); reject(error); }
            );
        }
    });
}

function adjustVolume(diff) {
    return new Promise(function(resolve, reject) {
        session.service("ALAudioDevice").then(
            function(audio) {
                audio.getOutputVolume().then(
                    function(currentVolume) {
                        var newVolume = currentVolume + diff;
                        if (newVolume > 100) { newVolume = 100; }
                        if (newVolume <  20) { newVolume =  20; }
                        audio.setOutputVolume(newVolume).then(resolve, reject);
                    },
                    function(error) { console.log(error); reject(error); }
                );
            },
            function(error) { console.log(error); reject(error); }
        );
    });
}

function setAnswer(value) {
    session.service("ALMemory").then(function (ALMemory) {
        if (value) {
            ALMemory.raiseEvent("HelloWorld/AnswerYes", "");
        } else {
            ALMemory.raiseEvent("HelloWorld/AnswerNo", "");
        }
    });
    return;
}

function setSurvey(value) {
    session.service("ALMemory").then(function (ALMemory) {
		switch (value) {
			case 1:
				ALMemory.raiseEvent("HelloWorld/SurveyGood", "");
				break;
			case 0:
				ALMemory.raiseEvent("HelloWorld/SurveyNeutral", "");
				break;
			case -1:
				ALMemory.raiseEvent("HelloWorld/SurveyBad", "");
				break;
		}
    });
    return;
}

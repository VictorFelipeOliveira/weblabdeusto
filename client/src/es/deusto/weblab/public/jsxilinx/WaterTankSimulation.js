//! This script contains the WaterTankSimulation class.

/// The following references are for VisualStudio, so that Intellisense recognizes every library.
/// <reference path="../jslib/weblabjs.js" />
/// <reference path="../jslib/three.min.js" />
/// <reference path="../jslib/stats.min.js" />
/// <reference path="../jslib/THREEx.FullScreen.js" />
/// <reference path="../jslib/jquery-1.9.1.js" />
/// <reference path="../jslib/jquery-ui-1.10.2.custom/js/jquery-ui-1.10.2.custom.js" />

WaterTankSimulation = function () {

    this._init = function () {
        this.world = new WorldLoader();
        this.waterOutputLevel = 0.5;
        this.rightPumpLevel = 0.5;
        this.leftPumpLevel = 0.5;
        this.waterLevel = 0.5;
        this.rightPumpTemperature = 0.0;
        this.leftPumpTemperature = 0.0;

        this._loadingDeferred = $.Deferred();
    }

    this.setLeftPumpTemperature = function (temp) {
        var pump = this.world.getObject("waterpumpLeft");
        if(temp > 0.8)
            pump.material = new THREE.MeshLambertMaterial({ color: 0xFF0000, ambient: 0x00 });
        else if(temp > 0.5)
            pump.material = new THREE.MeshLambertMaterial({ color: 0xFF6600, ambient: 0x00 });
        else if (temp > 0.2)
            pump.material = new THREE.MeshLambertMaterial({ color: 0xFFFF00, ambient: 0x00 });
        else 
            pump.material = new THREE.MeshLambertMaterial({ color: 0x0000FF, ambient: 0x00 });
    }

    this.setRightPumpTemperature = function (temp) {
        var pump = this.world.getObject("waterpumpRight");
        if (temp > 0.8)
            pump.material = new THREE.MeshLambertMaterial({ color: 0xFF0000, ambient: 0x00 });
        else if (temp > 0.5)
            pump.material = new THREE.MeshLambertMaterial({ color: 0xFF6600, ambient: 0x00 });
        else if (temp > 0.2)
            pump.material = new THREE.MeshLambertMaterial({ color: 0xFFFF00, ambient: 0x00 });
        else
            pump.material = new THREE.MeshLambertMaterial({ color: 0x0000FF, ambient: 0x00 });
    }

    this.setWaterOutputLevel = function (level) {
        this.world.getObject("waterfallOut").scale.set(50 + 100 * level, 100, 100);
        this.waterOutputLevel = level;
    }

    this.setWaterLevel = function (level) {
        this.world.getObject("water").scale.set(.95, level, .95);
        this.waterLevel = level;
    }

    this.setRightPumpLevel = function (level) {
        this.world.getObject("waterfallRight").scale.set(50+100*level, 100, 100);
        this.rightPumpLevel = level;
    }

    this.setLeftPumpLevel = function (level) {
        this.world.getObject("waterfallLeft").scale.set(50 + 100 * level, 100, 100);
        this.leftPumpLevel = level;
    }

    this.loadScene = function (scene, camera) {

        this.world.setOnLoad(function () {
            water = this.world.getObject("water");
            waterfall = this.world.getObject("waterfallRight");
            waterfall2 = this.world.getObject("waterfallLeft");
            waterfallOut = this.world.getObject("waterfallOut");

            setTimeout(

                function () {
                    pb.hide();
                },
                2000
                );

            this._animate_water(waterfall);
            this._animate_water(waterfall2);
            this._animate_water(waterfallOut);

            this._loadingDeferred.resolve();

        }.bind(this)); //! OnLoad


        this.world.load("World.js", scene);


        return this._loadingDeferred.promise();
    }



    this._animate_water = function (water) {

        new function (water, range, target_scale, increment) {
            return;
            setInterval(
                function () {

                    var currentX = water.scale.x;
                    
                    if (target_scale == undefined || currentX == target_scale) {
                        var target = Math.random(range) * range;
                        var positive = Math.floor(Math.random(2) * 2) == 1 ? true : false;

                    }

                    wfcurrent += wfinc;

                    if (wfcurrent > wftarget) {
                        wfcurrent = wftarget;
                        wfinc *= -1;

                        wftarget = 100 + Math.random(40) * 20;
                    }


                    if (wfcurrent < 0) {
                        wfcurrent = 0;
                        wfinc *= -1;

                        wftarget = 100 + Math.random(40) * 20;
                    }

                    wfscale = 100 + wfcurrent / 100.0 * wfrange;
                    //console.log("New scale: " + wfscale + " " + wfcurrent + " " + wfinc);

                    water.scale.set(wfscale, 100, 100);

                },
                    100
            );

        }(water, 5, 50, 0, 100);
    } // !_animate_water()



    this._init();

}





//waterLevel = 0.01;
//waterLevelChange = 0.03;
//setTimeout(
//    function () {
//        setInterval(
//            function () {

//                elapsed = 50;

//                waterLevel += waterLevelChange;
//                if (waterLevel > 1)
//                    waterLevel = 1;
//                else if (waterLevel < 0)
//                    waterLevel = 0;

//                if (waterLevel >= 1 || waterLevel <= 0) {
//                    waterLevelChange *= -1;

//                    if (typeof (waterfall) != "undefined") {
//                        if (waterLevelChange > 0) {
//                            waterfall.scale.set(150, 100, 100);
//                            waterfall2.scale.set(150, 100, 100);
//                        }
//                        else {
//                            waterfall.scale.set(50, 100, 100);
//                            waterfall2.scale.set(50, 100, 100);
//                        }

//                    }
//                }

//                water.scale.set(.95, waterLevel, .95);

//            },
//                50
//            );
//    },
//3000
//);


//wfrange = 5;
//wfinc = 25;
//wfcurrent = 0;
//wftarget = 100;

//setTimeout(
//    function () {
//        setInterval(
//            function () {



//                wfcurrent += wfinc;

//                if (wfcurrent > wftarget) {
//                    wfcurrent = wftarget;
//                    wfinc *= -1;

//                    wftarget = 100 + Math.random(40) * 20;
//                }


//                if (wfcurrent < 0) {
//                    wfcurrent = 0;
//                    wfinc *= -1;

//                    wftarget = 100 + Math.random(40) * 20;
//                }

//                wfscale = 100 + wfcurrent / 100.0 * wfrange;
//                //console.log("New scale: " + wfscale + " " + wfcurrent + " " + wfinc);

//                waterfallOut.scale.set(wfscale, 100, 100);

//            },
//                50
//            );
//    },
//3000
//);
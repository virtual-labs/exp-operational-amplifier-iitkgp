/*  Document Name:hlfwvoscilloscope_sinewv.js
 Created on : 14 oct, 2018
 Author     : sukriti
 */

var flag;
var vp;
var posy1;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec // time/div

//----------------------------------------Channel 1------------------------------------------------------------//

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
   if (flag == 1) {
        drawsqr();
    }
    
	if(flag == 5){
		drawsine();
	}
	
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
     if (flag == 1) {
        drawsqr();
    }
    if (flag == 2) {
           drawspk();
    }
	if(flag==3){
        bthdrc();
    }
    if(flag==4){
        grndrc();
    }
	if(flag == 5){
		drawsine();
	}
	if(flag == 6){
		drawcos();
	}
	
	 if(flag == 7){
		 bthdopamp();
	 }
 
}

function ampfng() {
    vp = document.getElementById("amp-knob-fng").value;
    if (flag == 1) {
        drawsqr();
    }
    if (flag == 2) {
           drawspk();
    }
	if(flag==3){
        bthdrc();
    }
    if(flag==4){
        grndrc();
    }
	if(flag == 5){
		drawsine();
	}
	if(flag == 6){
		drawcos();
	}
	
	 if(flag == 7){
		 bthdopamp();
	 }
    
}

function freqfng() {
    frqfng = document.getElementById("fq-knob-fng").value;
   if (flag == 1) {
        drawsqr();
    }
    if (flag == 2) {
           drawspk();
    }
	if(flag==3){
        bthdrc();
    }
    if(flag==4){
        grndrc();
    }
	if(flag == 5){
		drawsine();
	}
	if(flag == 6){
		drawcos();
	}
	
	 if(flag == 7){
		 bthdopamp();
	 }
}

//----------------------------------------code for drawing sine wave--------------------------------------------------//
function drawsine() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
     document.getElementById("triop1").style.visibility= "visible";
	 document.getElementById("triop").style.visibility = "hidden";
	 
		document.getElementById("chhn1_1").style.visibility= "visible";
        document.getElementById("chhn2_1").style.visibility= "visible";
        document.getElementById("dual_1").style.visibility= "visible";
        document.getElementById("grnd_1").style.visibility= "visible";
		
		document.getElementById("chhn1").style.visibility= "hidden";
        document.getElementById("chhn2").style.visibility= "hidden";
		 document.getElementById("grnd").style.visibility= "hidden";
        document.getElementById("dual").style.visibility= "hidden";
    drawGrid(ctx);
    drawAxis();
    sinwv();
}

function sinwv() {

    vp = document.getElementById("amp-knob-fng").value;
    frqfng = document.getElementById("fq-knob-fng").value;//frequency
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
   tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    flag = 5;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp * Math.sin(2 * 3.1415 * frqfng * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

}


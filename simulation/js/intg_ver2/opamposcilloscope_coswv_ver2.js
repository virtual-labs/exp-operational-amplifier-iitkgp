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

function posiy2chnge() {
    posy1 = document.getElementById("positiony1").value;
     
    if (flag == 2) {
           drawtri();
    }

	if(flag == 6){
		drawcos();
	}
	
	 
    
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
     if (flag == 1) {
        drawsqr();
    }
    if (flag == 2) {
           drawtri();
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
           drawtri();
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
           drawtri();
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
function drawcos() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
		document.getElementById("chhn1_1").disabled = false;
        document.getElementById("chhn2_1").disabled = false;
        document.getElementById("dual_1").disabled = false;
       document.getElementById("grnd_1").disabled = false;
		
		
       
    drawGrid(ctx);
    drawAxis();
    coswv();
}

function coswv() {

    vp = document.getElementById("amp-knob-fng").value;
    frqfng = document.getElementById("fq-knob-fng").value;//frequency
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony2").value;
   tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
  var  r=document.getElementById("restr").value*Math.pow(10,3);
  var c= document.getElementById("captr").value*Math.pow(10,-6);
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    flag = 6;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points
 var scalefactor= parseInt(r)*parseFloat(c);//-(1/r*c);
    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = (1/scalefactor)*(vp /(2 * 3.1415 * frqfng))*((Math.cos(2 * 3.1415 * frqfng * x[i] + phsl * 3.1415 / 180))-1);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
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


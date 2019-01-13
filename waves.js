MAX_RADIUS_WAVES = 0;
INIT_RADIUS_WAVES = 0;
WAVE_GAP = 100;
WAVE_AMPLITUDE = 30;

CENTER = new Point(0, 0);

CANVAS_WIDTH = 0;
CANVAS_HEIGHT = 0;

var waveOffset = 0;

function drawCircleWaves(ctx) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    var currentRadius = INIT_RADIUS_WAVES + waveOffset

    while (currentRadius < MAX_RADIUS_WAVES) {

        var distanceFromCenter = currentRadius / MAX_RADIUS_WAVES;

        ctx.strokeStyle = 'rgba(0,0,0,' + distanceFromCenter + ')';

        drawWave(ctx, currentRadius, CENTER, WAVE_AMPLITUDE * distanceFromCenter);

        currentRadius += WAVE_GAP;
    }
}

function calculateWaveR(offset, theta, nodeCount, amplitude) {
    return offset + amplitude * Math.sin(nodeCount * theta);
}

function drawWave(ctx, radius, offsetPoint, amplitude) {
    var increase = Math.PI / (180 * 1);

    var counter = 0;
    x = polarToX(calculateWaveR(radius, counter, 10, amplitude), counter) + offsetPoint.x;
    y = polarToY(calculateWaveR(radius, counter, 10, amplitude), counter) + offsetPoint.y;

    ctx.lineWidth = 1;

    ctx.beginPath();
    while (counter < 2 * Math.PI) {

        ctx.moveTo(x,y);

        x = polarToX(calculateWaveR(radius, counter, 10, amplitude), counter) + offsetPoint.x;
        y = polarToY(calculateWaveR(radius, counter, 10, amplitude), counter) + offsetPoint.y;
        
        counter += increase;

        ctx.lineTo(x,y);
    }
    ctx.stroke();
}

function go(ctx) {

    if (go.lastAnimation) {
        go.lastAnimation.keepAnimating = false;
    }
    var lastAnimation = animate({
        duration: 5000.0,
        timing: function(t) {
            return animateBetween(0, WAVE_GAP, Math.abs(t)); 
        },
        draw: function(fraction) {
            waveOffset = fraction;
            drawCircleWaves(ctx);
        },
        repeatCount: REPEAT_COUNT_INFINITY,
    });
}

window.addEventListener('load', function(e) {

    var canvas = document.getElementById('waves-canvas');
    var ctx = canvas.getContext('2d');

    var body = document.getElementsByTagName('body')[0];

    function resizeCanvas() {
        canvas.width = CANVAS_WIDTH = window.innerWidth;
        canvas.height = CANVAS_HEIGHT = window.innerHeight;

        CENTER.x = body.clientWidth * 0.5;
        CENTER.y = body.clientHeight * 0.5;

        var radius = CENTER.len();

        MAX_RADIUS_WAVES = radius;
        INIT_RADIUS_WAVES = radius / WAVE_GAP; 
    
        go(ctx); 
    }
    resizeCanvas();

    window.addEventListener('optimizedResize', function(e) {
        resizeCanvas();
    });
});


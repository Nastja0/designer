let canvas;
let context;
let x0 = 30;
let y0 = 30;

function painting_init() {
    canvas = document.querySelector('.painting');
    canvas.width = 600;
    canvas.heighy = 600;
    context = canvas.getContext("2d");
    context.strokeStyle = "black";

}


function painting_draw() {
    let on = +document.querySelector('input[name="ОН"]').value * 10;
    let ov = +document.querySelector('input[name="ОВ"]').value * 10;
    let gg = +document.querySelector('input[name="Г"]').value * 10;
    let shg = +document.querySelector('input[name="Шг"]').value * 10;
    let shpl = +document.querySelector('input[name="Шпл"]').value * 10;
    let og = +document.querySelector('input[name="Ог"]').value * 10;
    let po = +document.querySelector('input[name="ПО"]').value * 10;
    let ot = +document.querySelector('input[name="От"]').value * 10;
    let n1m1 = +document.querySelector('input[name="Н1М1"]').value * 10;
    let zz1 = +document.querySelector('input[name="ЗЗ1"]').value * 10;

    let os = (shg - shpl) / 2;
    let pj = (og - shpl) / 2;
    let mj1 = (ot - shpl) / 2;
    let vz = zz1 / 3;
    let vz1 = zz1 / 3 * 2;

    let s = [x0, y0];
    let o = [x0 + os, y0];
    let n = [x0 + os + on, y0];
    let v = [x0 + os, y0 + ov];
    let g = [x0, ov - gg];
    let p = [x0 + po + os, y0];
    let j = [x0 + po + os, y0 + pj];
    let m = [(n[0] + p[0]) / 2, (n[1] + p[1]) / 2];
    let j1 = [m[0],m[1] + mj1];
    let j2 = [(j[0] + j1[0]) / 2, j[1]];
    let z = [v[0] + vz, v[1]];
    let z1 = [v[0] - vz1, v[1]];
    let n1 = [n[0] ,n[1] + ov];
    let m1 = [n1[0], y0 + ov - n1m1];
    let tochka = [(n[0] + m[0]) / 2, (n[1] + m[1]) / 2];
    let p1 = [n1[0] + zz1 / 3 ,n1[1]];
    let p2 = [n1[0] - zz1 / 3 * 2, n1[1]];
    let m2 = [n[0], j1[1]];
    let m21 = [m2[0] + zz1 / 3 * 2, m2[1]];
    let sk = [m21[0], j[1]];
    let tochka2 = [p1[0], m21[1]];

    context.strokeStyle = "red";
    //первый пункт
    context.moveTo(o[0], o[1]);
    context.lineTo(n[0], n[1]);
    context.moveTo(o[0], o[1]);
    context.lineTo(v[0], v[1]);
    context.stroke();

    //второй пункт
    context.moveTo(o[0], o[1]);
    context.lineTo(s[0], s[1]);
    context.lineTo(v[0] - os, v[1]);
    context.stroke();

    //третий пункт
    context.moveTo(p[0], p[1]);
    context.lineTo(j[0], j[1]);
    context.moveTo(o[0], o[1]);
    context.quadraticCurveTo(o[0] - 10, g[1] - 10, g[0], g[1]);
    context.stroke();

    //четвертый пункт
    context.moveTo(m[0], m[1]);
    context.lineTo(j1[0], j1[1]);
    context.lineTo(j2[0], j2[1]);
    context.lineTo(j[0], j[1]);
    context.lineTo(g[0], j[1]);
    context.stroke();

    //пятый пункт
    context.moveTo(g[0], g[1]);
    context.lineTo(z1[0], z1[1]);
    context.lineTo(z[0], z[1]);
    context.lineTo(j[0], j[1]);
    context.stroke();

    //шестой пункт
    context.moveTo(n[0], n[1]);
    context.lineTo(n1[0], n1[1]);
    context.moveTo(m1[0], m1[1]);
    context.lineTo(tochka[0], tochka[1]);
    context.moveTo(m21[0], m21[1]);
    context.lineTo(j1[0], j1[1]);
    context.stroke();

    //седьмой пункт
    context.moveTo(j1[0], j1[1]);
    context.lineTo(p2[0], p2[1]);
    context.lineTo(p1[0], p1[1]);
    context.moveTo(j1[0], j1[1]);
    context.quadraticCurveTo((j1[0] + p2[0]) / 2 + (p2[0] - j1[0]) / 3, (j1[1] + p2[1]) / 2, p2[0], p2[1]);
    context.stroke();

    //восьмой пункт
    context.moveTo(p1[0], p1[1]);
    context.lineTo(sk[0], sk[1]);
    context.lineTo(tochka2[0], tochka2[1]);
    context.stroke();

    //девятый пункт
    context.moveTo(tochka2[0], tochka2[1]);
    context.quadraticCurveTo((tochka2[0] + m1[0]) / 2 + (tochka2[0] - m1[0]) / 3, (tochka2[1] + m1[1]) / 2, m1[0], m1[1]);
    context.stroke();

    context.strokeStyle = "black";
    drawPoint(s[0], s[1], 'С');
    drawPoint(o[0], o[1], 'О');
    drawPoint(n[0], n[1], 'Н');
    drawPoint(v[0], v[1], 'В');
    drawPoint(g[0], g[1], 'Г');
    drawPoint(p[0], p[1], 'П');
    drawPoint(j[0], j[1], 'Ж');
    drawPoint(m[0], m[1], 'М');
    drawPoint(j1[0] , j1[1], 'Ж1');
    drawPoint(z[0] , z[1], 'З');
    drawPoint(z1[0], z1[1], 'З1');
    drawPoint(n1[0], n1[1], 'Н1');
    drawPoint(m1[0], m1[1], 'М1');
    drawPoint(p1[0] ,p1[1], 'П1');
    drawPoint(p2[0], p2[1], 'П2');
    drawPoint(m2[0],m2[1], 'М2');
    drawPoint(sk[0], sk[1], 'СК');
    context.stroke();

    //десятый пункт
    context.lineWidth=3;

    context.moveTo(o[0], o[1]);
    context.quadraticCurveTo(o[0] - 10, g[1] - 10, g[0], g[1]);
    context.lineTo(z1[0], z1[1]);
    context.lineTo(z[0], z[1]);
    context.lineTo(j[0], j[1]);
    context.lineTo(j2[0], j2[1]);
    context.lineTo(j1[0], j1[1]);
    context.quadraticCurveTo((j1[0] + p2[0]) / 2 + (p2[0] - j1[0]) / 3, (j1[1] + p2[1]) / 2, p2[0], p2[1]);
    context.lineTo(p1[0], p1[1]);
    context.lineTo(sk[0], sk[1]);
    context.lineTo(tochka2[0], tochka2[1]);
    context.quadraticCurveTo((tochka2[0] + m1[0]) / 2 + (tochka2[0] - m1[0]) / 3, (tochka2[1] + m1[1]) / 2, m1[0], m1[1]);
    context.lineTo(tochka[0], tochka[1]);
    context.lineTo(o[0], o[1]);
    context.stroke();

}

function drawPoint(x, y, label) {
    let color = '#000';
    let size = 2;

    // to increase smoothing for numbers with decimal part
    var pointX = Math.round(x);
    var pointY = Math.round(y);

    context.beginPath();
    context.fillStyle = color;
    context.arc(pointX, pointY, size, 0 * Math.PI, 2 * Math.PI);
    context.fill();


    if (label) {
        var textX = pointX;
        var textY = Math.round(pointY - size - 3);

        context.font = 'Italic 14px Arial';
        context.fillStyle = color;
        context.textAlign = 'center';
        context.fillText(label, textX, textY);
    }
}


painting_init();
painting_draw();
document.querySelector('.button')
    .addEventListener('click', function () {
        painting_init();
        painting_draw();
    })
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float ball(vec2 p, float fx, float fy, float ax, float ay) {
    vec2 r = vec2(p.x + sin(u_time * fx) * ax, p.y + cos(u_time * fy) * ay);
    return .08 / length(r);
}

void main(void) {
    vec2 q = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = -1. + 2. * q;
    p.x	*= u_resolution.x / u_resolution.y;

    float col = 0.0;
    col += ball(p, 1., 2., .1, .2);
    col += ball(p, 1.5, 2.5, .2, .3);
    col += ball(p, 2., 3., .3, .4);
    col += ball(p, 2.5, 3.5, .4, .5);
    col += ball(p, 3., 4., .5, .6);
    col += ball(p, 1.5, .5, .6, .7);
    col += ball(p, .1, .5, .6, .7);

    col = max(mod(col, .3), min(col, 2.));

    gl_FragColor = vec4(col * .4, col * .13, col * .2, 1.);
}

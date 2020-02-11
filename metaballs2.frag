#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

mat2 scale(vec2 scale) { return mat2(scale.x, 0., 0., scale.y); }

float ball(vec2 p, float fx, float fy, float ax, float ay) {
  vec2 r = vec2(p.x + sin(u_time * fx) * ax, p.y + cos(u_time * fy) * ay);
  return .08 / length(r);
}

void main(void) {
  vec2 q = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = -1. + 2. * q;
  p.x *= u_resolution.x / u_resolution.y;

  vec2 radius = vec2(.3);
  radius = scale(vec2(cos(u_time), sin(u_time))) * radius;

  float col = 0.0;
  col += ball(p, 1., 2., .1, radius.x + .8);
  col += ball(p, 1.5, 2.5, .2, radius.y + .5);
  col += ball(p, 2., .2, .3, radius.x + .6);
  col += ball(p, 2.5, 3.5, .4, radius.y + .5);
  col += ball(p, 1.5, .5, .6, .7 + radius.x);
  col += ball(p, .1, .5, .6, .7 + radius.y);
  col += ball(p, .2, 2.2, .1, .9 + radius.x);
  col += ball(p, .2, 1.25, .9, .3 + radius.y);
  col += ball(p, 1.5, .8, .4, radius.y);

  col = max(mod(col, .4), min(col, 2.));

  gl_FragColor = vec4(col * .33, col * .13, col * .33, 1.);
}

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float draw_circle(vec2 position, float radius) {
  return step(radius, length(position - vec2(.5)));
}

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;

  float radius = abs(.05 + cos(u_time * .9));
  radius *= .4;

  position.x += cos(u_time * .8) * .2;
  position.y += sin(u_time * .04 * cos(u_time * .01));

  position *= 4.; // zoom factor
  vec2 grid = fract(position);

  float circle = draw_circle(grid, .1 + radius);

  gl_FragColor = vec4(vec3(circle), 1.);
}

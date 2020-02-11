#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circle(vec2 position, float radius) {
  return step(radius, length(position - vec2(.5)));
}

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;

  /* Static */
  /* vec2 translate = vec2(0., 0.); */

  /* Animated */
  vec2 translate = vec2(0. + sin(u_time), 0. + cos(u_time));

  coord += translate * .5;

  vec3 color = vec3(circle(coord, .1));

  gl_FragColor = vec4(color, 1.);
}

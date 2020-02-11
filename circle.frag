#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circle(vec2 position, float radius) {
  return step(radius, length(position - vec2(.5)));
}

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;

  float radius = abs(.05 + cos(u_time * .9));
  radius *= .2;

  position.x += .1 + cos(u_time * .8) * .2;
  position.y += .1 - sin(u_time * .4 * sin(u_time * .01)) * .4;

  float circle = circle(position, .01 + radius);

  gl_FragColor = vec4(vec3(circle), 1.);
}

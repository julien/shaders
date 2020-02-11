#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.);

  coord -= .5;

  color += sin(coord.x * cos(u_time / 30.) * 60.) +
           sin(coord.y * cos(u_time / 5.) * 10.);
  color += cos(coord.y * sin(u_time / 2.) * 10.) +
           cos(coord.x * sin(u_time / 40.) * 20.);
  color +=
      sin(coord.y * cos(u_time) * 30.) + sin(coord.y * cos(u_time / 4.) * 20.);

  coord += .5;
  /* color += sin(u_time / 20.) * .4; */

  gl_FragColor = vec4(vec3(color.r * .6, color.g * .3, color.b * .6), 1.);
}

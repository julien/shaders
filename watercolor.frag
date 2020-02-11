#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 coord = (u_resolution / gl_FragCoord.xy);

  vec3 color = vec3(0.);

  gl_FragColor = vec4(color, 1.);
}

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float rand2D(vec2 uv) {
	return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5443);
}

void main() {
	vec2 uv = gl_FragCoord.xy * .02;
	uv -= u_time + vec2(sin(uv.y), cos(uv.x));

	float r1 = fract(rand2D(floor(uv)) + u_time / 60.);
	float r2 = fract(rand2D(floor(uv)) + u_time / 40.);

	r1 *= .4 - length(fract(uv));

	gl_FragColor = vec4(r1 * 3., r2 * r1 *4., 0., 1.);
}

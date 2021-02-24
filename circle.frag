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

	float radius = abs(.03 + cos(u_time * .7));
	radius *= .2;

	position.x += cos(u_time * .8) * .2;
	position.y += sin(u_time * .4 * sin(u_time * .01)) * .4;

	float circle = circle(position, .01 + radius);

	gl_FragColor = vec4(vec3(circle), 1.);
}

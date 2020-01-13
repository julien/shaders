#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float rect(vec2 position, vec2 scale) {
	scale = vec2(.5) - scale * .5;

	vec2 shape = vec2(step(scale.x, position.x), step(scale.y, position.y));
	shape *= vec2(step(scale.x, 1. - position.x), step(scale.y, 1. - position.y));

	return shape.x * shape.y;
}

void main() {
	vec2 position = gl_FragCoord.xy / u_resolution;

	vec3 color = vec3(rect(position, vec2(.4, .2)));

	gl_FragColor = vec4(color, 1.);
}

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 scale(vec2 scale) {
	return mat2(scale.x, 0., 0., scale.y);
}

float circle(vec2 position, float radius) {
	return step(radius, length(position - vec2(.5)));
}

void main() {
	vec2 coord = gl_FragCoord.xy / u_resolution;

	/* Fix position */
	coord -= .5;
	/* Scale */
	coord = scale(vec2(
			sin(u_time * 2.) + 3.,
			cos(u_time * 4.) + 3.)
		) * coord;
	/* Fix position */
	coord += .5;

	vec3 color = vec3(circle(coord, .5));

	gl_FragColor = vec4(color, 1.);
}

#ifdef GL_ES
precision mediump float
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate(float angle) {
	float a = cos(angle);
	float b = sin(angle);
	return mat2(a, -b, b, a);
}


void main() {
	vec2 coord = (gl_FragCoord.xy - .5) / u_resolution + .5;

	float angle = cos(u_time / 30.) * 5. + sin(u_time / 60.) * 10.;
	coord -= 0.5;
	coord = rotate(angle) * coord;
	coord += 0.5;

	vec3 color = vec3(0.);
	color += sin(coord.x * cos(u_time / 30.) * 30.) +
		sin(coord.y * cos(u_time / 60.) * 10.);
	color += cos(coord.y * sin(u_time / 10.) * 20.) +
	 	cos(coord.x * sin(u_time / 30.) * 60.);

	gl_FragColor = vec4(
			vec3(color.r * sin(u_time * .05), color.g * .2, color.b * cos(u_time * .2)),
			1.
	);
}

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 scaledPos = normPos * 16.;
    vec2 scaledFract = fract(scaledPos);

    vec2 center = vec2(0.5, 0.5);

    float radius = u_time;

    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    // instead of calculate distance with normPos,
    // we calculate with scaledFract
    float dist = distance(scaledFract, center);

    if(dist < radius) {
        float red = fract(dist*8.0 - u_time);
        float blue = fract(u_time - dist);
        color = vec4(red , blue, 0.720, 1.000);
    }

    gl_FragColor = color;
}
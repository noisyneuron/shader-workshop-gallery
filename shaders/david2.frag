#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 scaledPos = normPos * 5.;
    vec2 scaledFract = fract(scaledPos);

    vec2 center = vec2(0.5, 0.5);

    float radius = 2.9*fract(u_time/2.)*(2.-fract(u_time/2.));

    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    // instead of calculate distance with normPos,
    // we calculate with scaledFract
    float dist = distance(scaledFract, center);

    if(dist < radius) {
        //float red = fract(dist*8.0 - u_time);
        float red = fract(u_time * 0.6 + dist * normPos.x/0.2 * normPos.y/20.0*fract(u_time)) * (1.0-fract(u_time/0.153 * normPos.y * normPos.x));
        color = vec4(red ,0.135, 0.400, 1.000);
    }

    gl_FragColor = color;
}
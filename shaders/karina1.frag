#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 center = vec2(0.5,0.5);

    float radius = u_time * 0.2;

    // Let the color be black by default
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    float dist = distance(normPos, center);

    if(dist < radius) {
        float red = fract(u_time - dist*8.0);
        color = vec4(red,dist,0.5,dist);
        //we could make the color dependent on dist (ie, distance from the center)
        // color = vec4(dist,0.135,0.400,1.000);
    }

    gl_FragColor = color;
}
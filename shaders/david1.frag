#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 center = vec2(0.500,0.500);

    float radius = 0.9*fract(u_time)*(1.2-fract(u_time));

    // Let the color be black by default
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    float dist = distance(normPos, center);

    if(dist < radius) {
        float red = fract(u_time * 0.6 + dist * normPos.x/0.2) * (1.0-fract(u_time/0.2 * normPos.y * normPos.x));
        //color = vec4(normPos.x*fract(u_time)*(1.0-fract(u_time))/0.5,0.063,0.384,0.992);
        color = vec4(red,0.063,0.384,0.992);
        //we could make the color dependent on dist (ie, distance from the center)
        // color = vec4(dist,0.135,0.400,1.000);
    }

    gl_FragColor = color;
    
}
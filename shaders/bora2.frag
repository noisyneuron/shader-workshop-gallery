#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    
    
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy*fract(u_time*-0.122);
        vec2 scaledPos = normPos * 7.848;
    vec2 scaledFract = fract(scaledPos);
float w = distance(normPos, vec2(0.450,0.350));
    vec2 center = vec2(0.116/w, 0.5*w/0.408);
float dist = distance(scaledFract, center)-w*fract(u_time/2.0 + w/0.472);
    float radius = 0.156+dist;

    // Let the color be black by default
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    

    if(dist < radius) {
        color = vec4(fract(u_time /2.0 + dist/0.472),0.039/dist,0.896*dist,w+dist/0.1);
        //we could make the color dependent on dist (ie, distance from the center)
        // color = vec4(dist,0.135,0.400,1.000);
    }

    gl_FragColor = color+dist/2.528;
}
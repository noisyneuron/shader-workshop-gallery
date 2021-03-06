#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;



void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 scaledPos = normPos * 5.0;
    vec2 scaledFract = fract(scaledPos);
    vec2 scaledIndex = floor(scaledPos);

    vec2 center = vec2(0.5, 0.5);

    float radius = sin(u_time)/7.+0.2;

    // increase the speed of the animation by *scaling up* time
    // ie multiplying time by some number, so the input to sin() is changing faster
    // uncomment the line below to see what happens
    // radius = sin(u_time * 3.0);

    vec4 color;
    
    float dist = distance(scaledFract, center);
    float red = fract(u_time * 0.6 + dist * normPos.x/0.2) * (1.0-fract(u_time/0.4 * normPos.y * normPos.x));

    
    if(dist < radius) {

        //color = vec4(dist, 0.135,0.400, 1.000) ;
        color = vec4(red, 0.135,0.400, 1.000) ;
    }

    gl_FragColor = color;
}
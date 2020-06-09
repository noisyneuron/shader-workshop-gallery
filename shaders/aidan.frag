#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;

    vec2 scaledPos = fract(u_time*.1)*normPos * 20.;
    vec2 scaledFract = fract(scaledPos);
    vec2 scaledIndex = floor(scaledPos);

    vec2 center = vec2(0.5, 0.5);

    //float radius = fract(u_time*.15)*.75;
	float radius = abs(sin(.5*u_time*(scaledIndex.x+scaledIndex.y+1.)/2.))*.65;
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    // instead of calculate distance with normPos,
    // we calculate with scaledFract
    float dist = distance(scaledFract, center);

    if(dist < radius) {
        float red = fract(-dist*8.0 + u_time);
        color = vec4(red ,0.135, 0.400, 1.000);
    }
    else{
        float red2 = fract((scaledIndex.x+scaledIndex.y)*.2-u_time);
        //float green2 = fract(scaledIndex.y*.25-u_time);
        color = vec4(red2,0.135, 0.400, 1.000);
    }

    gl_FragColor = color;
}
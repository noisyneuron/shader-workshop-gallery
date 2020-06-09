#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main() {
    
    
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy*fract(u_time*0.014);
        vec2 scaledPos = normPos * 10.432;
    vec2 scaledFract = fract(scaledPos);
     vec2 scaledIndex = floor(scaledPos/scaledFract);
float w = distance(normPos, vec2(0.450,0.350));
    vec2 center = vec2(0.116/w/fract(u_time*0.022), 1.516*w/1.776);
float dist = distance(scaledFract*scaledIndex/w/111.0, center)-w*fract(u_time/2.0 + w/0.472);
   float radius = sin(u_time * 3.768 + scaledIndex.y);
    
    // lets make the radius depend on time *and* the the column *and* row number
    // radius = sin(u_time * 3.0 + scaledIndex.x + scaledIndex.y);
    
    radius = map(radius, -1.168, 0.472, 1.348, 1.600);

    // Let the color be black by default
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    

    if(dist < radius) {
        color = vec4(fract(u_time /1.608/w + dist/0.432),0.055/dist*fract(u_time /w*-0.001),0.688*dist,w+dist/0.212);
        //we could make the color dependent on dist (ie, distance from the center)
        // color = vec4(dist,0.135,0.400,1.000);
    }

    gl_FragColor = color+dist/3.616;
}
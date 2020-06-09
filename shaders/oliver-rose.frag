// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
     
    
    vec2 normPos = gl_FragCoord.xy/u_resolution.xy;
    vec2 scaledPos = normPos * 6.056;
    vec2 scaledFract = fract(scaledPos);
    vec2 scaleIndex = floor(scaledPos);
	  
    
    
    float avg = (scaledFract.x - scaledFract.y)/2.;
         vec2 center = vec2 (0.5, 0.5);  
    float dist = distance(scaledFract,center);
     float red = fract(u_time+dist+scaleIndex.y*0.01);
	//float blue =
    float radius = sin(u_time * 3.0 + scaleIndex.x);
 
 
 //   float dist = distance(normPos, center);
    vec4 color1 = vec4 (red, 0.5, red , 1.0);
    vec4 color2 = vec4 (0.5, normPos.y, red, red);
    vec4 color3 = vec4 (0.9, red, normPos.y, 1.0);
    if (dist<radius){
   // if (dist<radius){
    gl_FragColor = color1;    
} if (dist> 0.5){
        gl_FragColor = color3;
    }
    else {
        gl_FragColor = color2;
    }
    
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     st.x *= u_resolution.x/u_resolution.y;

//     vec3 color = vec3(0.);
//     color = vec3(st.x,st.y,abs(sin(u_time)));

//     gl_FragColor = vec4(color,1.000);
}
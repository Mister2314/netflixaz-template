import fs from "node:fs/promises";
import {films} from "../src/data/films.js";
const palettes=[["#253e3c","#a8c1a9"],["#4c2029","#e8a99b"],["#343048","#c2b4d9"],["#59412b","#e9c998"],["#263a4d","#a3c9da"],["#423d30","#e0d7a8"]];
const esc=s=>s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
for(const [index,f] of films.entries()){
 const [bg,fg]=palettes[index%palettes.length];const lines=[];for(const word of f.title.split(" ")){if(!lines.length||lines.at(-1).length+word.length>17)lines.push(word);else lines[lines.length-1]+=" "+word;}
 const words=lines.map((line,i)=>'<tspan x="32" dy="'+(i?48:0)+'">'+esc(line)+'</tspan>').join("");
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="'+bg+'"/><stop offset="1" stop-color="#100e0d"/></linearGradient></defs><rect width="400" height="600" fill="url(#g)"/><g fill="none" stroke="'+fg+'" opacity=".3">'+Array.from({length:7},(_,i)=>'<circle cx="'+(220+index%3*20)+'" cy="210" r="'+(35+i*22)+'"/>').join("")+'</g><path d="M0 320 400 120V180L0 380Z" fill="'+fg+'" opacity=".12"/><text x="32" y="48" fill="'+fg+'" font-family="Arial,sans-serif" font-size="12" letter-spacing="4">AZƏRBAYCAN KİNOSU</text><text x="32" y="330" font-family="Georgia,serif" font-size="80" fill="'+fg+'" opacity=".2">'+f.year+'</text><text x="32" y="'+(480-(lines.length-1)*48)+'" fill="#f5f2ee" font-family="Georgia,serif" font-size="39">'+words+'</text><path d="M32 530H368" stroke="'+fg+'" opacity=".4"/><text x="32" y="558" fill="'+fg+'" font-family="Arial,sans-serif" font-size="12">'+f.year+' · '+esc(f.genres[0])+'</text><text x="32" y="582" fill="'+fg+'" opacity=".7" font-family="Arial,sans-serif" font-size="9" letter-spacing="2">ORİJİNAL ÜZLÜK · RƏSMİ POSTER DEYİL</text></svg>';
 await fs.writeFile(f.poster.src,svg);
}
await fs.writeFile("docs/CONTENT_SOURCES.md","# Məzmun mənbələri\n\n32 film. Mətnlər orijinal xülasədir. Bütün üzlüklər layihə üçün tipoqrafik SVG kompozisiyasıdır, rəsmi poster deyil.\n\n"+films.map(f=>"- "+f.title+" ("+f.year+"): "+f.sources[0].url).join("\n")+"\n\nNar bağı treyler linki rejissorun səhifəsindən götürülüb. YouTube playback hələ təsdiqlənməyib. Digər filmlərdə treyler null-dır.\nSəbuhi ili üçün Kinometraj və Filmfond 1941 göstərir; Azerbaijan.az tarix mətnində 1942 var. Kataloq 1941 qəbul edir.\n");
console.log("32 orijinal üzlük və mənbə jurnalı yazıldı.");


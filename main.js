/* ---------- Edit your content here ---------- */
const MEMBERS = [
  {level:"Master 2", people:[
    ["Sirat Asmaa","Smart agriculture for environmental preservation"],
    ["Sensaoui Ines Zineb","Smart agriculture for environmental preservation"],
    ["Bellabed Imen","Micro- and nanorobots for medical applications"]]},
  {level:"Master 1", people:[
    ["Fortas Mohamed","Industry 4.0: monitoring a solar power station"],
    ["Boubekeur Marwa","Industry 4.0: monitoring a solar power station"]]},
  {level:"Licence 3", people:[
    ["Moulai Hadj Abderached","Smart farm: forecast horizon 2050"],
    ["Khennouche Mohamed","Smart farm: forecast horizon 2050"]]}
];
// Add journal papers here; the "Publications" section lists them by year automatically.
// Example: {year:2024, ref:"Abderrahmane, A. et al. (2024) 'Title', Journal, 12(3), pp. 1–10.", url:"https://doi.org/..."}
const PUBS = [];
// [year, title, event, place]
const TALKS = [
 [2022,"Effect of H₂-plasma treatment on the spin-coated perovskite solar cells","1st Int. Conf. on Renewable Materials and Energies (ICRME 2022)","Ouargla, Algeria"],
 [2021,"Two-dimensionally layered graphene/MoSe₂/black phosphorus heterojunction","ICAE 2021, 6th Int. Conf. on Advanced Electro Materials","Jeju, Korea"],
 [2021,"Dual-gate graphene/h-BN/GaSe metal-insulator-semiconductor field-effect transistor (MISFET)","ICAE 2021, 6th Int. Conf. on Advanced Electro Materials","Jeju, Korea"],
 [2021,"Optoelectronic properties of WSe₂/SnSe₂/WSe₂ van der Waals heterojunction field-effect transistor","ICAE 2021, 6th Int. Conf. on Advanced Electro Materials","Jeju, Korea"],
 [2019,"Nano grain of zinc oxide assembled in hex nut deposited by sol-gel coating method","1st Int. Conf. on Renewable Energy and Energy Conversion (ICREEC 2019)","Algeria"],
 [2018,"ZnO thin films prepared by chemical method on QCM for CH₄ gas sensing","12th National Congress of Physics and its Applications","Algiers, Algeria"],
 [2018,"Portable fluorescent microscope for microrobotic application and point-of-care (POC) diagnostics","Optics and Photonics Algeria (OPAL 2018)","USTO-MB, Oran, Algeria"],
 [2018,"High performance n-type and p-type two-dimensional materials for optoelectronic devices and photodetection","OPAL 2018","USTO-MB, Oran, Algeria"],
 [2018,"Extraction of silica from diatomite for optical applications and solar grade silicon (SoG-Si) development","OPAL 2018","USTO-MB, Oran, Algeria"],
 [2018,"Interatomic potentials development and optical properties of alpha tellurite and europium oxide","OPAL 2018","USTO-MB, Oran, Algeria"],
 [2017,"Fabrication and magnetic control of polymer based soft nanorobot","IRAGO 2017","Univ. of Electro-Communications, Tokyo, Japan"],
 [2017,"Nano-layered MoSe₂ based near-infrared photodetector","IRAGO 2017","Univ. of Electro-Communications, Tokyo, Japan"],
 [2016,"Gate-tunable optoelectronic properties of nano-layered GaSe based photodetector","IRAGO 2016","Univ. of Electro-Communications, Tokyo, Japan"],
 [2016,"Irradiation effect on AlGaN/GaN heterostructures","IRAGO 2016","Univ. of Electro-Communications, Tokyo, Japan"],
 [2016,"Magnetic control of self-assembled superparamagnetic micro-particles for microrobotic applications","IRAGO 2016","Univ. of Electro-Communications, Tokyo, Japan"],
 [2016,"Novel capsule for nanoscale observation of materials in liquid by transmission electron microscopy","IRAGO 2016","Univ. of Electro-Communications, Tokyo, Japan"],
 [2016,"Two-dimensional h-BN/MoSe₂ heterostructures based phototransistors","Korean Vacuum Society conference","Korea"],
 [2014,"High photosensitivity few-layered MoSe₂ back-gated field-effect phototransistors","IRAGO 2014","AIST, Tsukuba, Japan"],
 [2014,"High proton irradiation tolerance of InAsSb quantum well based micro-Hall sensors","IRAGO 2014","AIST, Tsukuba, Japan"],
 [2014,"Reducing few-layered MoSe₂ film to single-layer by laser etching","IRAGO 2014","AIST, Tsukuba, Japan"],
 [2014,"Radiation hard AlGaN/GaN heterostructure micro-Hall sensors","Japan Society of Applied Physics, 75th Autumn Meeting","Hokkaido University, Japan"],
 [2014,"MoSe₂ semiconductor indirect-to-direct transition by laser induced etching","Japan Society of Applied Physics, 75th Autumn Meeting","Hokkaido University, Japan"],
 [2013,"Effect of annealing on proton irradiated AlGaN/GaN based micro-Hall sensors","IRAGO 2013","Tahara, Aichi, Japan"],
 ["","High temperature scanning Hall probe microscopy and temperature sensors","EIIRIS project results meeting","Toyohashi University of Technology, Japan"],
 [2012,"Effect of proton irradiation on quantum Hall effect in AlGaN/GaN 2DEG heterostructures","AP-IRC 2012","Tahara, Aichi, Japan"],
 [2012,"Robust Hall effect magnetic field sensors for operation at high temperatures and in harsh radiation environments","IEEE International Magnetics Conference (INTERMAG 2012)","Vancouver, Canada"],
 [2011,"Proton irradiation of 2-DEG AlGaN/GaN micro-Hall sensors","AP-IRC 2011","Toyohashi University of Technology, Japan"],
 [2010,"Successive ionic layer adsorption and reaction and dip-coating techniques automation for thin film elaboration","National seminar of scientific research","USTHB, Algiers, Algeria"],
 [2009,"Study on the physical phenomena intervening in the successive ionic layer adsorption and reaction technique","1st national seminar on materials and their applications","USTHB, Algiers, Algeria"],
 [2008,"Study on the carrier distribution on the surface of Algerian montmorillonite","22nd Meeting on Earth Sciences","Nancy, France"]
];
/* ---------- Rendering ---------- */
const $ = s => document.querySelector(s), esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
$("#yr").textContent = new Date().getFullYear();

// Raman spectrum (sum of Lorentzians), x range 370–420 cm⁻¹
(function(){
  const W=520,H=300,L=40,R=10,T=14,B=44,x0=370,x1=420;
  const lor=(x,c,w,h)=>h/(1+((x-c)/w)**2);
  const curve=(E,A)=>{let d="";for(let x=x0;x<=x1;x+=.25){const y=lor(x,...E)+lor(x,...A)+.02;
    d+=(d?"L":"M")+(L+(x-x0)/(x1-x0)*(W-L-R)).toFixed(1)+","+(H-B-y/1.1*(H-B-T)).toFixed(1)}return d};
  const tick=v=>`<text x="${L+(v-x0)/(x1-x0)*(W-L-R)}" y="${H-B+18}" text-anchor="middle">${v}</text>`;
  $("#spectrum").innerHTML=`<line class="ax" x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}"/><line class="ax" x1="${L}" y1="${T}" x2="${L}" y2="${H-B}"/>`
   +[370,380,390,400,410,420].map(tick).join("")
   +`<text x="${(L+W-R)/2}" y="${H-8}" text-anchor="middle">Raman shift (cm⁻¹)</text>`
   +`<path class="curve b" pathLength="1" d="${curve([382.5,1.5,.62],[406.5,1.8,1])}"/>`
   +`<path class="curve a" pathLength="1" d="${curve([381.8,1.8,.66],[405.6,2.3,.95])}"/>`
   +`<text x="${L+(382-x0)/50*(W-L-R)-30}" y="${T+95}">E¹₂g</text><text x="${L+(407-x0)/50*(W-L-R)+8}" y="${T+8}">A₁g</text>`
   +`<text x="${W-150}" y="${T+50}" style="fill:var(--ink)">— before etching</text><text x="${W-150}" y="${T+68}" style="fill:var(--pink)">— after etching</text>`;
})();

$("#members").innerHTML = MEMBERS.map(g => `<section><h3>${esc(g.level)}</h3>${g.people.map(p => `<p><strong>${esc(p[0])}</strong><small>${esc(p[1])}</small></p>`).join("")}</section>`).join("");

if (PUBS.length) {
  const years = [...new Set(PUBS.map(p => p.year))].sort((a,b) => b-a);
  $("#pubs").innerHTML = years.map(y => `<h3>${y}</h3><ul>${PUBS.filter(p => p.year===y).map(p => `<li>${esc(p.ref)}${p.url ? ` <a href="${esc(p.url)}" rel="noopener">Link</a>` : ""}</li>`).join("")}</ul>`).join("");
}

function showTalks(q = "") {
  const k = q.trim().toLowerCase();
  const rows = TALKS.filter(t => t.join(" ").toLowerCase().includes(k));
  $("#talklist").innerHTML = rows.map(t => `<li><b>${t[0] || "n.d."}</b><div>${esc(t[1])}<span>${esc(t[2])}, ${esc(t[3])}</span></div></li>`).join("");
  $("#count").textContent = rows.length ? `${rows.length} of ${TALKS.length} talks` : "No talk matches this filter. Try a shorter word or a year.";
}
$("#q").addEventListener("input", e => showTalks(e.target.value));
showTalks();

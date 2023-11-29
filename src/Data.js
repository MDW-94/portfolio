import dramm_1 from '../src/Images/project_images/dramm_1.png'
import navigate_1 from '../src/Images/project_images/navigate_1.png'
import pcc_1 from '../src/Images/project_images/pcc_1.png'
// Can't be imported due to hierarchy!

const dramm_imgs = []

const navigate_imgs = []

const pcc_imgs = []

const codeProjects = [
    {name: "DRAMM Audio-Visual Synth",
    desc: "An interactive, audio-visual synthesizer using XY touch or mouse event data to affect dynamic parameters in Tone.js (audio) and P5.js (visuals)",
    image: dramm_1,
    languages: ["React","Javascript", "Java", "Tone.js", "P5.js", "Spring.io", "MongoDB", "Insomnia"]}, 

    {name: "Navigate - Social Services Management App",
    desc: "A Social Service management application which uses dynamic location data to render social services on a map of Glasgow City. This includes an updateable list of service users which can be assigned to different services",
    image: navigate_1,
    languages: ["ArcGIS", "React","Javascript", "MongoDB", "Express.js", "Nodemon"]},

    {name: "Pet Care Console - Veterinary Management App",
    desc: "Pet Care Console is a full-stack, Flask application for veterinary practice to assign pets to different vets. A relational database is used to link pet IDs to Vet IDs and with scope to extend this to owners and a timestamped, note-taking system",
    image: pcc_1,
    languages: ["Python", "Flask", "PostgreSQL", "PsycoPg2"]}
]

export default codeProjects;
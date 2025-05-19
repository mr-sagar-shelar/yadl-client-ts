interface CodeExample {
    name: string;
    description?: string;
    code: string;
}
export const Examples: CodeExample[] = [
    {
        "name": "first",
        "description": "",
        "code":
            `
skill-icon skillIconActivityPub { position { x: -22 y: 21 } dimension { width: 50 height: 50 } }
skill-icon skillIconAnsible { position { x: -25 y: 109 } dimension { width: 50 height: 50 } }

`
    },
    {
        "name": "Edge Example",
        "description": "",
        "code":
            `
skill-icon SkillActivityPub skillIconActivityPub { position { x: 15 y: 35 } dimension { width: 50 height: 50 } }
gcp-icon GcpAnthos gCPAnthos { position { x: 193 y: 177 } dimension { width: 50 height: 50 } }
azure-icon AzureAI azureAiMachineLearningContentSafety { position { x: -199 y: -107 } dimension { width: 50 height: 50 } }
skill-icon SkillAngular skillIconAngular { position { x: 202 y: -101 } dimension { width: 50 height: 50 } }
skill-icon SkillAtom skillIconAtom { position { x: -196 y: 161 } dimension { width: 50 height: 50 } }


edge SkillActivityPub => GcpAnthos label:"smooth edge" { type: smoothstep sourceHandle: right style:"{ 'stroke': 'pink' }" labelStyle:"{ 'fill': 'pink', 'fontWeight': 700 }" }
edge SkillActivityPub => AzureAI label:"straight edge" { type: straight sourceHandle: left targetHandle: bottom style:"{ 'stroke': 'red' }" labelStyle:"{ 'fill': 'red', 'fontWeight': 700 }" }
edge SkillActivityPub => SkillAngular { type: step targetHandle: left style:"{ 'stroke': 'green' }"  }
edge SkillActivityPub => SkillAtom { type: default sourceHandle: bottom targetHandle: right style:"{ 'stroke': 'blue' }"  }

`
    },
    {
        "name": "third",
        "description": "",
        "code":
            `
azure-icon azureAzureEcosystemCollaborativeService { position { x: -34 y: 99 } dimension { width: 50 height: 50 } }

`
    },
    {
        "name": "Z Index Example",
        "description": "",
        "code":
            `
undraw-icon undrawPhoneCall { position { x: -233 y: -264 } dimension { width: 470 height: 470 } }
skill-icon skillIconActivityPub { position { x: -137 y: -144 } dimension { width: 136 height: 136 } }
skill-icon skillIconC { position { x: -54 y: -93 } dimension { width: 113 height: 113 } }
skill-icon skillIconDjango { position { x: -144 y: -27 } dimension { width: 110 height: 110 } }
skill-icon skillIconFortran { position { x: -49 y: -16 } dimension { width: 123 height: 123 } }
text "Z Index Example Z Index Example Z Index Example " { position { x: -362 y: -14 } fontFamily: "Audiowide" classes: "mx-auto break-words truncate bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-2xl" }

`
    },
    {
        "name": "Boxes Example",
        "description": "",
        "code":
            `

skill-icon skillIconActivityPub { position { x: -22 y: 21 } dimension { width: 50 height: 50 } }
box Box1 { position { x: -61 y: -37 } dimension { width: 81 height: 82 } classes: "bg-primary opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 77 y: -35 } dimension { width: 93 height: 139 } classes: "bg-primary-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 221 y: -31 } dimension { width: 64 height: 62 } classes: "bg-secondary opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 251 y: 27 } dimension { width: 186 height: 67 } classes: "bg-secondary-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: -11 y: 157 } dimension { width: 54 height: 44 } classes: "bg-accent opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 113 y: 130 } dimension { width: 65 height: 54 } classes: "bg-accent-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 200 y: 102 } dimension { width: 99 height: 166 } classes: "bg-warning opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 329 y: 128 } dimension { width: 95 height: 33 } classes: "bg-warning-content opacity-100 border-1 rounded-none border-solid " }
box Box1 { position { x: 257 y: -179 } dimension { width: 100 height: 100 } classes: "bg-secondary-content opacity-100 border-2 rounded-e-full border-dashed border-blue-500" }
box Box1 { position { x: 222 y: 185 } dimension { width: 100 height: 100 } classes: "bg-secondary-content opacity-50 border-2 rounded-e-full border-dashed border-blue-500" }

`
    }
]
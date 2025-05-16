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
`
    },
    {
        "name": "second",
        "description": "",
        "code":
            `
gcp-icon gCPAnthos { position { x: 27 y: 54 } dimension { width: 50 height: 50 } }

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
    }
]
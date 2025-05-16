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
    }
]
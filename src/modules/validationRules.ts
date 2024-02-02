export const validationRules = {
    required: (v: any) => !!v || v === 0 || "Required",
    textMin: (v: string, min: number) => !v || v.length >= min || `${min} Characters Min.`,
    textMax: (v: string, max: number) => !v || v.length <= max || `${max} Characters Max.`,
    integer: (v: any) => !v || Number.isInteger(parseFloat(v)) || "Integers Only",
    intMin: (v: number, min: number) => !v || v >= min || `${min} Min.`,
    intMax: (v: number, max: number) => !v || v <= max || `${max} Max.`,
    email: (v: string) => !v || /.+@.+\..+/.test(v) || "E-mail must be valid",
    url: (v: string) => !v || isUrl(v) || "Valid URLs only",
    httpsUrl: (v: string) => !v || isHttpsUrl(v) || "HTTPS URLs only",
    ethereumPrivateKey: (v: string) => !v || /^0x([A-Fa-f0-9]{40})$/.test(v) || "Ethereum Address is invalid",
    ethereumContractAddress: (v: string) => !v || /^0x([A-Fa-f0-9]{40})$/.test(v) || "Contract Address is invalid",
    array: (v: any) => !v || Array.isArray(v) || "Value must be an array",
};

function isUrl(str: string): boolean {
    let url;

    try {
        url = new URL(str);
    } catch (ex) {
        return false;
    }

    return url.protocol === "https:" || url.protocol === "http:";
}

function isHttpsUrl(str: string): boolean {
    let url;

    try {
        url = new URL(str);
    } catch (ex) {
        return false;
    }

    return url.protocol === "https:";
}

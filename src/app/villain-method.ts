// DMG page 95
export class VillainMethod {
    constructor(methodType: string, methodStrings: string[]) {
        this.methodType = methodType;
        this.methodStrings = methodStrings;
        this.specificMethod = '';
    }
    methodType: string;
    methodStrings: string[];
    specificMethod: string;

    setRandomSpecificMethod(): void {
        this.specificMethod = this.methodStrings[Math.floor(Math.random() * this.methodStrings.length)];
    }
}
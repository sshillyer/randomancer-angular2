// DMG page 95
export class VillainMethod {
    methodType: string;
    methodStrings: string[];
    specificMethod: string;

constructor(methodType: string, methodStrings: string[]) {
        this.methodType = methodType;
        this.methodStrings = methodStrings;
        this.specificMethod = '';
    }

    setRandomSpecificMethod(): void {
        this.specificMethod = this.methodStrings[Math.floor(Math.random() * this.methodStrings.length)];
    }
}

export class Widget {
    constructor(
        public name: string = "",
        public description: string = "",
        public price: number = 0,
        public qty: number = 0,
        public editable: boolean = false,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
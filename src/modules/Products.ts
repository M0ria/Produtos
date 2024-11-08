interface SpecificationsProps { }

class Product {
    id: string;
    name: string;
    description: string;
    specifications: any;
    image: string;
    category: string;

 constructor(data: Product){
this.id = data.id
this.name = data.name
this.description = data.description
this.specifications = data.specifications
this.image = data.image
this.category = data.category
 }
}
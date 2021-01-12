export type Order = {
    id: number,
    address: string,
    lat: number,
    lng: number,
    moment: string,
    status: string,
    total: number,
    products: Product[]
}

export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
}